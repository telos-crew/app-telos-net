<template>
  <div>
		<config-table></config-table>
    <case-files-table></case-files-table>
  </div>
</template>

<script>
import ConfigTable from '../../components/ConfigTable.vue'
import CaseFilesTable from '../../components/CaseFilesTable.vue'

export default {
  components: {
    ConfigTable,
    CaseFilesTable
  }
}
</script>

<style scoped></style>
