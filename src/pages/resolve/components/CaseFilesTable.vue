<template>
  <div class="q-pa-md">
    <q-table
      title="Case Files"
      :data="caseFiles"
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
      caseFiles: this.$store.state.resolve.case_files,
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
      this.$router.push({ path: `case-file/${caseFileId}`, params: { caseFileId } })
    }
  }
}
</script>

<style scoped>
.arbitrator-cell {
	padding: 10px 0;
}
</style>
