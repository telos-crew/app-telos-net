<template>
  <div class="q-pa-md">
    <q-banner inline-actions class="text-white bg-red" v-if="isPastAddCandidates">
      Candidacy nomination period for current election has already passed
    </q-banner>
    <q-table
      title="Nominees"
      :data="nomineeData"
      :columns="columns"
      :rows="nomineeData"
      row-key="name"
    >
      <template v-slot:body-cell-nominee_name="props">
        <q-td :props="props">
					<profile-avatar :account_name="props.nominee_name" size="24px" childClass="profile-avatar"></profile-avatar>
						<span>{{props.row.nominee_name}}</span>
					</q-td>
			</template>
    </q-table>
  </div>
</template>

<script>
import { GET_TABLE_ROWS } from '../util/fetch'
import ProfileAvatar from '../../../components/common/ProfileAvatar.vue'

export default {
  components: { ProfileAvatar },
  data () {
    return {
      config: this.$store.config,
      columns: [
        { name: 'nominee_name', label: 'Nominee', field: 'nominee_name' },
        {
          name: 'credentials_link',
          label: 'Credentials',
          field: 'credentials_link'
        },
        {
          name: 'application_time',
          label: 'Applied',
          field: 'application_time'
        }
      ],
      nomineeData: []
    }
  },
  methods: {
    async fetchNominees () {
      try {
        const { rows } = await GET_TABLE_ROWS({
          code: 'testtelosarb',
          scope: 'testtelosarb',
          table: 'nominees',
          reverse: false
        })
        this.nomineeData = rows
      } catch (err) {
        console.warn('fetchNominees error: ', err)
      }
    },
    isPastAddCandidates () {
      let result = false
      const end = new Date(this.config.end_add_candidates_ts)
      const now = new Date()
      if (now > end) {
        result = true
      }
      return result
    }
  },
  beforeMount: function () {
    console.log('nominees mounted')
    this.fetchNominees()
  }
}
</script>

<style scoped>
.profile-avatar {
	display: inline;
	margin-right: 8px;
}
</style>
