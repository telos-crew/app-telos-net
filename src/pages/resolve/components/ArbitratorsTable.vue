<template>
  <div class="q-pa-md">
    <q-table
      title="Arbitrators"
      :data="arbitratorsData"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body-cell-arb="props">
        <q-td :props="props">
					<profile-avatar :account_name="props.arb" size="24px" childClass="profile-avatar"></profile-avatar>
						<span>&nbsp;{{props.row.arb}}</span>
					</q-td>
			</template>
      <template v-slot:body-cell-open_case_ids="props">
        <q-td :props="props">
						<span v-for="id in props.row.open_case_ids" v-bind:key="id">{{id}}<br /></span>
					</q-td>
			</template>
      <template v-slot:body-cell-closed_case_ids="props">
        <q-td :props="props">
						<span v-for="id in props.row.closed_case_ids" v-bind:key="id">{{id}}<br /></span>
					</q-td>
			</template>
      <template v-slot:body-cell-arb_status="props">
        <q-td :props="props">
						<span>{{getArbStatus(props.row.arb_status)}}</span>
					</q-td>
			</template>
    </q-table>
  </div>
</template>

<script>
import ProfileAvatar from 'src/components/common/ProfileAvatar.vue'
import { ARBITRATOR_STATUS_LIST } from '../constants/arbitrators'

export default {
  components: {
    ProfileAvatar
  },
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
    getArbStatus (statusCode) {
      return ARBITRATOR_STATUS_LIST[statusCode]
    },
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
