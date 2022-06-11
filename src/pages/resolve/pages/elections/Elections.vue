<template>
  <div>
    <nominees-table></nominees-table>
    <elections-table></elections-table>
  </div>
</template>

<script>
import ElectionsTable from '../../components/ElectionsTable.vue'
import NomineesTable from '../../components/NomineesTable.vue'

export default {
  components: {
    ElectionsTable,
    NomineesTable
  }
}
</script>

<style scoped></style>
