<template>
  <div class="q-pa-md">
    <q-table title="Elections" :data="electionData" :columns="columns" row-key="name">
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="election_id" :props="props">
            {{ props.row.election_id }}
          </q-td>
          <q-td key="ballot_name" :props="props">
            {{ props.row.ballot_name }}
          </q-td>
          <q-td key="info_url" :props="props">
            {{ props.row.info_url }}
          </q-td>
          <candidates-cell :props="props"></candidates-cell>
          <q-td key="available_seats" :props="props">
            {{ props.row.available_seats }}
          </q-td>
          <q-td key="begin_voting_ts" :props="props">
            {{ props.row.begin_voting_ts }}
          </q-td>
          <q-td key="end_voting_ts" :props="props">
            {{ props.row.end_voting_ts }}
          </q-td>
          <q-td key="status" :props="props">
            {{ props.row.status }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { GET_TABLE_ROWS } from '../util/fetch'
import CandidatesCell from './CandidatesCell.vue'

export default {
  components: {
    CandidatesCell
  },
  data () {
    return {
      columns: [
        { name: 'election_id', label: 'ID', field: 'election_id' },
        { name: 'ballot_name', label: 'Ballot Name', field: 'ballot_name' },
        { name: 'info_url', label: 'Info', field: 'info_url' },
        { name: 'candidates', label: 'Candidates', field: 'candidates' },
        { name: 'available_seats', label: 'Seats', field: 'available_seats' },
        { name: 'begin_voting_ts', label: 'Start Voting', field: 'begin_voting_ts' },
        { name: 'end_voting_ts', label: 'End Voting', field: 'end_voting_ts' },
        { name: 'status', label: 'Status', field: 'status' }
      ],
      electionData: []
    }
  },
  methods: {
    async fetchElections () {
      try {
        const { rows } = await GET_TABLE_ROWS({
          code: 'testtelosarb',
          scope: 'testtelosarb',
          table: 'elections',
          reverse: true
        })
        // console.log('fetchElections data: ', data)
        this.electionData = rows
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
