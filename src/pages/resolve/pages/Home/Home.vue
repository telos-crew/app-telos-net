<template>
	<div class="container">
		<div class="primary">
			<Intro />
		</div>
		<div class="secondary">
			<ElectionsStatus />
		</div>
	</div>
</template>

<script>
import Intro from './Intro.vue'
import ElectionsStatus from './ElectionsStatus.vue'

export default {
  components: {
    Intro,
    ElectionsStatus
  }
}

</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: row;
}
.primary {
	flex: 1;
}
.secondary {
	flex: 1
}
</style>
