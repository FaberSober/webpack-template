<template>
	<div>
		<div>{{ $store.state.count }}</div>

		<button @click="handleAddCount">Add Count</button>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		handleAddCount() {
			this.$store.commit('increment');
			console.log(this.$store.state.count);
		},
	},
};
</script>
