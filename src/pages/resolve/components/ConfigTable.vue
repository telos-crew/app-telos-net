<template>
  <div class="q-pa-md">
    <q-table
      title="Contract"
      :data="config"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body-cell-admin="props">
        <q-td :props="props">
					<profile-avatar :account_name="props.admin" size="24px" childClass="profile-avatar"></profile-avatar>
						<span>&nbsp;{{props.row.admin}}</span>
					</q-td>
			</template>
    </q-table>
  </div>
</template>

<script>
import ProfileAvatar from 'src/components/common/ProfileAvatar.vue'

export default {
  components: {
    ProfileAvatar
  },
  data () {
    return {
      config: [this.$store.state.resolve.config],
      columns: [
        { name: 'admin', label: 'Admin', field: 'admin' },
        { name: 'current_election_id', label: 'Current Election', field: 'current_election_id' },
        { name: 'arb_term_length', label: 'Arbitrator Term', field: 'arb_term_length' },
        { name: 'election_add_candidates_ts', label: 'Add Election Nominees', field: 'election_add_candidates_ts' },
        { name: 'election_voting_ts', label: 'Election Duration', field: 'election_voting_ts' },
        { name: 'max_elected_arbs', label: 'Arbitrator Count', field: 'max_elected_arbs' },
        { name: 'runoff_election_voting_ts', label: 'Runoff Election Duration', field: 'runoff_election_voting_ts' }
        // { name: 'admin', label: 'Admin', field: 'admin' },
        // { name: 'admin', label: 'Admin', field: 'admin' },
      ]
    }
  }
}
</script>

<style scoped></style>
