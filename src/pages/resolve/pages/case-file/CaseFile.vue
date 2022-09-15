<template>
  <div>
    <div class="row">
      <div class="part">
        <intro-card
          heading="Case Summary"
          >
          <p><strong>{{caseData.claimant}}</strong> is the claimant, with <strong>{{caseData.respondant}}</strong> being the respondant.
            There is one arbitrator assigned to the case.</p>
          <template v-slot:buttons>
            <div class="intro-buttons-wrap">
              <q-btn color="primary" label="Add claim to case" />&nbsp;
              <q-btn color="primary" label="Respond to claim" />
            </div>
          </template>
        </intro-card>
      </div>
      <div class="part">
        hello
      </div>
    </div>
    <div class="q-pa-md">
      <q-table
        title="Case"
        :data="caseFile"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:body-cell-claimant="props">
          <q-td :props="props">
            <profile-avatar :account_name="props.claimant" size="24px" childClass="profile-avatar"></profile-avatar>
              <span>&nbsp;{{props.row.claimant}}</span>
            </q-td>
        </template>
        <template v-slot:body-cell-respondant="props">
          <q-td :props="props">
            <profile-avatar :account_name="props.respondant" size="24px" childClass="profile-avatar"></profile-avatar>
              <span>&nbsp;{{props.row.respondant}}</span>
            </q-td>
        </template>
        <template v-slot:body-cell-arbitrators="props">
          <q-td :props="props">
            <div v-for="arbitrator of props.row.arbitrators" v-bind:key="arbitrator" class="arbitrator-cell">
              <profile-avatar :account_name="arbitrator" size="24px" childClass="profile-avatar"></profile-avatar>
              <span>&nbsp;{{arbitrator}}</span>
            </div>
          </q-td>
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <div>
              <q-btn-dropdown color="primary" label="Actions">
                <q-list>
                  <q-item clickable v-close-popup @click="goToCaseFile(props.row.case_id)">
                    <q-item-section>
                      <q-item-label>View</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
          </q-td>
        </template>
      </q-table>
      <br /><br />
      <claims-table></claims-table>
    </div>
  </div>
</template>

<script>
import { GET_TABLE_ROWS } from '../../constants'
import ClaimsTable from '../../components/ClaimsTable.vue'
import ProfileAvatar from 'src/components/common/ProfileAvatar.vue'
import IntroCard from '../../components/IntroCard.vue'

export default {
  props: ['id'],
  components: {
    ClaimsTable,
    ProfileAvatar,
    IntroCard
  },
  data () {
    return {
      caseFile: [],
      columns: [
        { name: 'case_id', label: 'ID', field: 'case_id' },
        { name: 'claimant', label: 'Claimant', field: 'claimant' },
        { name: 'respondant', label: 'Respondant', field: 'respondant' },
        { name: 'arbitrators', label: 'Arbitrators', field: 'arbitrators' },
        { name: 'number_claims', label: '# Claims', field: 'number_claims' },
        { name: 'approvals', label: 'Approvals', field: 'approvals' },
        { name: 'required_langs', label: 'Lang', field: 'required_langs' },
        { name: 'case_status', label: 'Status', field: 'case_status' },
        { name: 'case_ruling', label: 'Ruling', field: 'case_ruling' },
        { name: 'update_ts', label: 'Last Updated', field: 'update_ts' },
        { name: 'actions', label: 'Actions', field: 'actions' }
      ]
    }
  },
  methods: {
    goToCaseFile (caseFileId) {
      this.$router.push({ path: `resolve/case/${caseFileId}`, params: { caseFileId } })
    },
    async fetchCaseFile () {
      try {
        const { rows } = await GET_TABLE_ROWS({
          code: 'testtelosarb',
          scope: 'testtelosarb',
          table: 'casefiles',
          upper_bound: this.$route.params.id,
          lower_bound: this.$route.params.id,
          reverse: true
        })
        this.caseFile = rows
      } catch (err) {
        console.log('fetch case files error:', err)
      }
    }
  },
  mounted: function () {
    this.fetchCaseFile()
  },
  computed: {
    caseData () {
      return this.caseFile[0]
    }
  }
}
</script>

<style scoped lang="scss">
.row {
  flex-direction: row;

  .part {
    flex: 1;
  }

  .intro-buttons-wrap {
    flex-direction: column;
  }

}

</style>
