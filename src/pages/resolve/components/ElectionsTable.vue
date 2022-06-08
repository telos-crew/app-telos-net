<template>
  <div class="q-pa-md">
    <q-table title="Treats" :data="electionData" :columns="columns" row-key="name" />
  </div>
</template>

<script>
import { GET_TABLE_ROWS } from '../util/fetch'

export default {
  data () {
    return {
      columns: [],
      electionData: []
    }
  },
  methods: {
    async fetchElections () {
      console.log('fetching elections')
      try {
        const data = await GET_TABLE_ROWS({
          code: 'testtelosarb',
          scope: 'testtelosarb',
          table: 'elections'
        })
        this.electionData = data
      } catch (err) {
        console.warn('fetchElections error: ', err)
      }
    }
  },
  mounted: function () {
    console.log('mounted')
    this.fetchElections()
  }
}
</script>

<style scoped></style>
