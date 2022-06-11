<template>
  <div>
    <section class="sub-header">
      <h3>Resolve Portal</h3>
    </section>
    <div class="nav-tabs">
      <div class="q-pa-md">
        <div class="q-gutter-y-md" style="max-width: 600px">
          <q-tabs v-model="tab" class="text-teal">
            <router-link to="/resolve/elections">
              <q-tab name="mails" icon="mail" label="Elections" />
            </router-link>
            <q-tab name="alarms" icon="alarm" label="Case Files" />
            <q-tab name="movies" icon="movie" label="Movies" />
          </q-tabs>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { GET_TABLE_ROWS } from './constants'

export default {
  data () {
    return {
      tab: 'mails'
    }
  },
  methods: {
    async fetchArbConfig () {
      try {
        const { rows } = await GET_TABLE_ROWS({
          code: 'testtelosarb',
          scope: 'testtelosarb',
          table: 'config',
          reverse: false
        })
        const [config] = rows
        this.configData = config
        this.$store.commit('resolve/setArbConfig', config)
      } catch (err) {
        console.warn('fetchConfig error: ', err)
      }
    }
  },
  mounted: function () {
    this.fetchArbConfig()
    console.log('resolve mounted', this.$store)
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
