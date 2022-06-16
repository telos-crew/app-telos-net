<template>
  <div>
		<config-table></config-table>
    <arbitrators-table></arbitrators-table>
    <case-files-table></case-files-table>
  </div>
</template>

<script>
import ConfigTable from '../../components/ConfigTable.vue'
import CaseFilesTable from '../../components/CaseFilesTable.vue'
import ArbitratorsTable from '../../components/ArbitratorsTable.vue'

export default {
  components: {
    ConfigTable,
    ArbitratorsTable,
    CaseFilesTable
  }
}
</script>

<style scoped></style>
