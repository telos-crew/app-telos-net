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
		<template v-slot:body-cell-summary="props">
			<q-td :props="props">
				<IpfsLink :hash="props.row.summary"></IpfsLink>
			</q-td>
		</template>
		<template v-slot:body-cell-decision="props">
			<q-td :props="props">
				<IpfsLink :hash="props.row.decision"></IpfsLink>
			</q-td>
		</template>
	</q-table>
</template>

<script>
import { fetchClaims } from '../util'
import { DECISION_CLASS_LIST } from '../constants/claim'
import IpfsLink from './IpfsLink.vue'

export default {
  props: ['caseId'],
  components: {
    IpfsLink
  },
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
    async getClaims () {
      try {
        const rows = await fetchClaims(this, this.$route.params.id)
        this.claims = rows
      } catch (err) {
        console.log('getClaims error:', err)
      }
    },
    getStatus (statusId) {
      return DECISION_CLASS_LIST[statusId]
    }
  },
  mounted: function () {
    this.getClaims()
    setInterval(() => this.getClaims(this, this.$route.params.id), 10000)
  }
}
</script>

<style scoped>

</style>
