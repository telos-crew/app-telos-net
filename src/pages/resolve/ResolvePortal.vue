<template>
  <div>
    <section class="sub-header">
      <h3>Resolve Portal</h3>
    </section>
    <div class="nav-tabs">
      <div class="q-pa-md">
        <div class="q-gutter-y-md" style="max-width: 600px">
          <q-tabs v-model="tab" class="text-teal">
            <router-link to="/resolve/">
              <q-tab name="home" icon="home" label="Home" />
            </router-link>
            <router-link to="/resolve/elections">
              <q-tab name="mails" icon="mail" label="Elections" />
            </router-link>
            <q-tab name="movies" icon="movie" label="Movies" />
          </q-tabs>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {
  fetchArbConfig,
  fetchArbitrators,
  fetchElections,
  fetchNominees,
  fetchCaseFiles
} from './util'

export default {
  data () {
    return {
      tab: 'mails'
    }
  },
  methods: {
    async getArbConfig () {
      try {
        const config = await fetchArbConfig(this)
        this.$store.commit('resolve/setArbConfig', config)
      } catch (err) {
        console.warn('fetchConfig error: ', err)
      }
    },
    async getArbitrators () {
      try {
        const arbitrators = await fetchArbitrators(this)
        this.$store.commit('resolve/setArbitrators', arbitrators)
      } catch (err) {
        console.warn('fetchArbitrators error: ', err)
      }
    },
    async getElections () {
      try {
        const elections = await fetchElections(this)
        this.$store.commit('resolve/setElections', elections)
      } catch (err) {
        console.warn('getElections error: ', err)
      }
    },
    async getNominees () {
      try {
        const nominees = await fetchNominees(this)
        this.$store.commit('resolve/setNominees', nominees)
      } catch (err) {
        console.warn('getNominees error: ', err)
      }
    },
    async getCaseFiles () {
      try {
        const caseFiles = await fetchCaseFiles(this)
        this.$store.commit('resolve/setCaseFiles', caseFiles)
      } catch (err) {
        console.warn('getCaseFiles error: ', err)
      }
    },
    fetchAllData () {
      this.getArbConfig()
      this.getArbitrators()
      this.getElections()
      this.getNominees()
      this.getCaseFiles()
    }
  },
  mounted: function () {
    this.fetchAllData()
    setInterval(this.fetchAllData, 10000)
  }
}
</script>

<style scoped>
.sub-header {
  margin-top: 20px;
}

.sub-header h3 {
  margin: 0 auto;
  text-align: center;
}
a:-webkit-any-link {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
}
.nav-tabs {
  display: flex;
  flex: 1;
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
}

.nav-tabs .q-gutter-y-md {
  max-width: 100% !important;
}

.nav-tabs .q-tab {
  padding: 0 72px;
}
</style>
