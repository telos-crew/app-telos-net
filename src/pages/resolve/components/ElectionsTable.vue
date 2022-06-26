<template>
  <div class="q-pa-md">
    <q-table title="Elections"
      :data="electionData"
      :columns="columns"
      row-key="name"
      :loading="electionData === null"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="election_id" :props="props">
            {{ props.row.election_id }}
          </q-td>
          <q-td key="ballot_name" :props="props">
            {{ props.row.ballot_name }}
          </q-td>
          <q-td key="info_url" :props="props">
            <ipfs-link :hash="props.row.info_url">
              {{props.row.info_url}}
            </ipfs-link>
          </q-td>
          <candidates-cell :props="props"></candidates-cell>
          <q-td key="available_seats" :props="props">
            {{ props.row.available_seats }}
          </q-td>
          <q-td key="end_add_candidates_ts" :props="props">
            {{ props.row.end_add_candidates_ts }}
          </q-td>
          <q-td key="begin_voting_ts" :props="props">
            {{ props.row.begin_voting_ts }}
          </q-td>
          <q-td key="end_voting_ts" :props="props">
            {{ props.row.end_voting_ts }}
          </q-td>
          <q-td key="status" :props="props">
            {{ ELECTION_STATUS[props.row.status] }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import CandidatesCell from './CandidatesCell.vue'
import { ELECTION_STATUS } from '../constants'
import IpfsLink from './IpfsLink.vue'

export default {
  components: {
    CandidatesCell,
    IpfsLink
  },
  data () {
    return {
      columns: [
        { name: 'election_id', label: 'ID', field: 'election_id' },
        { name: 'ballot_name', label: 'Ballot Name', field: 'ballot_name' },
        { name: 'info_url', label: 'Info', field: 'info_url' },
        { name: 'candidates', label: 'Candidates', field: 'candidates' },
        { name: 'available_seats', label: 'Seats', field: 'available_seats' },
        { name: 'end_add_candidates_ts', label: 'End Add Candidates', field: 'end_add_candidates_ts' },
        { name: 'begin_voting_ts', label: 'Start Voting', field: 'begin_voting_ts' },
        { name: 'end_voting_ts', label: 'End Voting', field: 'end_voting_ts' },
        { name: 'status', label: 'Status', field: 'status' }
      ],
      ELECTION_STATUS
    }
  },
  computed: {
    electionData () {
      return this.$store.state.resolve.elections
    }
  }
}
</script>

<style scoped></style>
