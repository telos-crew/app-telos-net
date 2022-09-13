<template>
	<div class="intro">
		<section class="info">
			<h3>{{heading}}</h3>
			<p class="first">{{text}}</p>
			<q-btn color="primary" :label="buttonText" />
		</section>
	</div>
</template>

<script>
export default {
  props: ['heading', 'text', 'buttonText', 'onClickButton']
}
</script>

<style lang="scss" scoped>
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
		p.first {
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 18px;
			color: #333333;
			margin-bottom: 36px;
		}
	}
</style>
