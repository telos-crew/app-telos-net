<template>
  <div>
    <!-- <nominees-table></nominees-table> -->
    <div class="intro">
      <section class="info">
        <h3>Ensure Telos is fair</h3>
        <p class="second">Do you have an asset related issue that you’d like the network’s arbitration system to resolve? We believe that a transparent process benefits everyone.</p>
        <q-btn color="primary" label="Create a new case" />
      </section>
    </div>
		<nominees-table />
    <elections-table />
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

<style scoped lang="scss">
	.info {
		margin-right: 80px;
    width: 40%;
    margin-bottom: 38px;

		h3 {
			font-style: normal;
			font-weight: 600;
			font-size: 24px;
			line-height: 37px;
			color: rgba(51, 51, 51, 0.5);
		}
		p.second {
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 18px;
			color: #333333;
			margin-bottom: 36px;
		}
	}
</style>
