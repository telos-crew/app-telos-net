import PPP from '@smontero/ppp-client-api'

const getAuthenticator = function (ual, wallet = null) {
  wallet = wallet || localStorage.getItem('autoLogin')
  const idx = ual.authenticators.findIndex(auth => auth.constructor.name === wallet)
  return {
    authenticator: ual.authenticators[idx],
    idx
  }
}
// export const login = async function ({ commit, dispatch }, idx) {
// export const login = async function ({ commit, dispatch }, { idx, account }) {
export const login = async function ({ commit, dispatch }, { idx, account, returnUrl }) {
  const authenticator = this.$ual.authenticators[idx]
  try {
    commit('setLoadingWallet', authenticator.getStyle().text)
    await authenticator.init()
    if (!account) {
      const requestAccount = await authenticator.shouldRequestAccountName()
      if (requestAccount) {
        await dispatch('fetchAvailableAccounts', idx)
        commit('setRequestAccount', true)
        return
      }
    }
    const users = await authenticator.login(account)
    if (users.length) {
      this.$api = users[0]
      const accountName = await users[0].getAccountName()
      commit('setAccount', accountName)
      localStorage.setItem('autoLogin', authenticator.constructor.name)
      localStorage.setItem('account', accountName)
      this.$router.push({ path: returnUrl || '/trails/treasuries' })
    }
  } catch (e) {
    const error = (authenticator.getError() && authenticator.getError().message) || e.message || e.reason
    commit('general/setErrorMsg', error, { root: true })
    console.log('Login error: ', error)
  } finally {
    commit('setLoadingWallet')
  }
}

export const loginToBackend = async function ({ commit }) {
  try {
    PPP.setActiveUser(this.$api)
    const authApi = PPP.authApi()
    await authApi.signIn()
    await this.dispatch('profiles/getProfile', { root: true })
    return true
  } catch (e) {
    console.log('Failed to login to backend: ', e)
    commit('general/setErrorMsg', e.message || e, { root: true })
    return false
  }
}

export const logout = async function ({ commit }) {
  await PPP.authApi().signOut()
  const { authenticator } = getAuthenticator(this.$ual)
  authenticator && authenticator.logout()
  commit('setAccount')
  localStorage.removeItem('autoLogin')
  this.$api = null
  this.$router.push({ path: '/' })
}

export const autoLogin = async function ({ dispatch, commit }, returnUrl) {
  const { authenticator, idx } = getAuthenticator(this.$ual)
  if (authenticator) {
    commit('setAutoLogin', true)
    await dispatch('login', { idx, returnUrl, account: localStorage.getItem('account') })
    commit('setAutoLogin', false)
  }
}

export const isAccountFree = async function (context, accountName) {
  try {
    await this.$axios.get(`/v1/accounts/${accountName}`)
    return false
  } catch (e) {
    // Catch the 404 error if the account doesn't exist
    return true
  }
}

export const sendOTP = async function ({ commit }, form) {
  try {
    const response = await this.$axios.post('/v1/registrations', {
      smsNumber: form.smsNumber,
      telosAccount: form.account
    })
    if (response) {
      commit('setSignUpForm', form)
    }
    return true
  } catch (e) {
    return {
      error: e.message
    }
  }
}

export const verifyOTP = async function ({ commit, state }, { password, publicKey }) {
  try {
    const response = await this.$axios.post('/v1/accounts', {
      smsOtp: password,
      smsNumber: state.signUpForm.smsNumber,
      telosAccount: state.signUpForm.account,
      ownerKey: publicKey,
      activeKey: publicKey
    })
    return !!response
  } catch (e) {
    return false
  }
}

export const fetchAvailableAccounts = async function ({ commit }, idx) {
  commit('resetAvailableAccounts')
  const chainId = process.env.NETWORK_CHAIN_ID
  const authenticator = this.$ual.authenticators[idx]
  const map = await authenticator.getAccountNamesPerChain()
  const accounts = map.has(chainId) ? map.get(chainId) : []
  commit('setAvailableAccounts', accounts)
}
