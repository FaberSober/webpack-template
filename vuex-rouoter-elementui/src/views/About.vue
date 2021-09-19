<template>
	<div class="about">
		<h1 class="test-var">This is an about page</h1>
	</div>
</template>

<script>
export default {
	data: function () {
		return { visible: false };
	},
};
</script>

<style lang="scss" scoped>
.test-var {
	color: $primary-color;
}
</style>
