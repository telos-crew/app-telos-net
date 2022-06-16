<template>
  <div class="q-pa-md">
    <q-table
      title="Arbitrators"
      :data="arbitratorsData"
      :columns="columns"
      row-key="name"
    >
    </q-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arbitratorsData: [],
      columns: [
        { name: 'arb', field: 'arb', label: 'Arbitrator' },
        { name: 'arb_status', field: 'arb_status', label: 'Status' },
        { name: 'open_case_ids', field: 'open_case_ids', label: 'Open Cases' },
        { name: 'closed_case_ids', field: 'closed_case_ids', label: 'Closed Cases' },
        { name: 'credentials_link', field: 'credentials_link', label: 'Credentials' },
        { name: 'elected_time', field: 'elected_time', label: 'Elected' },
        { name: 'term_expiration', field: 'term_expiration', label: 'Term Ends' },
        { name: 'languages', field: 'languages', label: 'Languages' }
      ]
    }
  },
  methods: {
    async fetchArbitrators () {
      try {
        const { rows } = await this.$store.$api.getTableRows({
          code: 'testtelosarb',
          scope: 'testtelosarb',
          table: 'arbitrators'
        })
        console.log('fetchArbitrators rows: ', rows)
        this.arbitratorsData = rows
      } catch (err) {
        console.log('fetchArbitrators error: ', err)
      }
    }
  },
  mounted: function () {
    this.fetchArbitrators()
  }
}
</script>

<style scoped>

</style>
