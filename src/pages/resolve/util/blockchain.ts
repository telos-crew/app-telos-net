import { SymbolInfo } from '../types'

export const validateName = (name: string) => {
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz123456'
  const validCharacterList = validCharacters.split('')
  let isValid = true
  if (name.includes('.')) {
    if (name.length < 3 || name.length > 12) {
      isValid = false
    }
  } else {
    if (name.length !== 12) {
      isValid = false
    }
  }
  const nameCharacterList = name.split('')
  for (const character of nameCharacterList) {
    if (!validCharacterList.includes(character)) {
      isValid = false
    }
  }
  return isValid
}

export const validateIpfsHash = (url: string) => {
  if (url.length !== 46 && url.length !== 49) return false
  return true
}

export const fetchArbConfig = async (context) => {
  const { rows } = await context.$store.$api.getTableRows({
    code: 'testtelosarb',
    scope: 'testtelosarb',
    table: 'config'
  })
  const [config] = rows
  return config
}

export const fetchArbitrators = async (context) => {
  const { rows } = await context.$store.$api.getTableRows({
    code: 'testtelosarb',
    scope: 'testtelosarb',
    table: 'arbitrators'
  })
  return rows
}

export const fetchElections = async (context) => {
  const { rows } = await context.$store.$api.getTableRows({
    code: 'testtelosarb',
    scope: 'testtelosarb',
    table: 'elections',
    reverse: true
  })
  return rows
}

export const fetchNominees = async (context) => {
  const { rows } = await context.$store.$api.getTableRows({
    code: 'testtelosarb',
    scope: 'testtelosarb',
    table: 'nominees'
  })
  return rows
}

export const fetchCaseFiles = async (context) => {
  const { rows } = await context.$store.$api.getTableRows({
    code: 'testtelosarb',
    scope: 'testtelosarb',
    table: 'casefiles'
  })
  return rows
}

export const fetchClaims = async (context, id: number) => {
  const { rows } = await context.$store.$api.getTableRows({
    code: 'testtelosarb',
    scope: id,
    table: 'claims'
  })
  return rows
}

export const getSymbolInfo = (balance: string): SymbolInfo => {
  if (balance.includes('.')) {
    const [amount, symbol] = balance.split(' ')
    const [whole, decimal] = amount.split('.')
    const decimalCount = decimal.length
    const tokenSyntax = `${decimalCount},${symbol}`
    return {
      tokenSyntax,
      decimalCount,
      whole,
      decimal,
      symbol,
      amount
    }
  }
  const [amount, symbol] = balance.split(' ')
  const whole = amount
  const decimal = ''
  const decimalCount = 0
  const tokenSyntax = `${decimalCount},${symbol}`
  return {
    tokenSyntax,
    decimalCount,
    whole,
    decimal,
    symbol,
    amount
  }
}
