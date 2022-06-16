<template>
	<q-dialog v-model="dialogName" persistent>
		<q-card style="min-width: 350px">
			<q-card-section>
				<div class="text-h6">Your address</div>
			</q-card-section>

			<q-card-section class="q-pt-none">
				<q-input dense autofocus />
			</q-card-section>

			<q-card-actions align="right" class="text-primary">
				<q-btn flat label="Cancel" v-close-popup />
				<q-btn flat label="Add address" v-close-popup />
			</q-card-actions>
		</q-card>
	</q-dialog>
</template>

<script>
export default {
  props: ['dialogName'],
  mounted: function () {
    console.log('nominateSelfModal mounted, this.dialogName', this.dialogName)
  }
}

</script>

<style lang="less" scoped>

</style>
