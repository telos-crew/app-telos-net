<template>
<div class="q-pa-md">
<q-table title="Nominees" :data="nomineeData" :columns="columns" :rows="nomineeData" row-key="name">
<template v-slot:body-cell-nominee_name="props">
<q-td :props="props">
{{ props.row.nominee_name }} hello
</q-td>
</template>
</q-table>
</div>
</template>

<script>
import { GET_TABLE_ROWS } from '../util/fetch'

export default {
  components: {
  },
  data () {
    return {
      columns: [
        { name: 'nominee_name', label: 'Nominee', field: 'nominee_name' },
        { name: 'credentials_link', label: 'Credentials', field: 'credentials_link' },
        { name: 'application_time', label: 'Applied', field: 'application_time' }
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
    }
  },
  mounted: function () {
    console.log('nominees mounted')
    this.fetchNominees()
  }
}
</script>

<style>
</style>
