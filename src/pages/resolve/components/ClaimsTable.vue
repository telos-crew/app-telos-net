<template>
	<q-table
		title="Claims"
		:data="claims"
		:columns="columns"
		row-key="name"
	>
		<template v-slot:body-cell-status="props">
			<q-td :props="props">
				<span>&nbsp;{{getStatus(props.row.status)}}</span>
			</q-td>
		</template>
	</q-table>
</template>

<script>
import { GET_TABLE_ROWS } from '../util/fetch'
import { DECISION_CLASS_LIST } from '../constants/claim'

export default {
  props: ['caseId'],
  data () {
    return {
      claims: [],
      columns: [
        { name: 'claim_id', label: 'ID', field: 'claim_id' },
        { name: 'claim_summary', label: 'Summary', field: 'claim_summary' },
        { name: 'decision_class', label: 'Class', field: 'decision_class' },
        { name: 'decision_link', label: 'Decision', field: 'decision_link' },
        { name: 'response_link', label: 'Response', field: 'response_link' },
        { name: 'status', label: 'Status', field: 'status' }
      ]
    }
  },
  methods: {
    async fetchClaims () {
      try {
        const { rows } = await GET_TABLE_ROWS({
          code: 'testtelosarb',
          scope: this.$route.params.id,
          table: 'claims'
        })
        console.log('fetchClaims rows: ', rows)
        this.claims = rows
      } catch (err) {
        console.log('fetchClaims error:', err)
      }
    },
    getStatus (statusId) {
      return DECISION_CLASS_LIST[statusId]
    }
  },
  mounted: function () {
    this.fetchClaims()
  }
}
</script>

<style scoped>

</style>
