<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<div>Home: vue+vuex+vue-router+elementui</div>

		<el-button @click="visible = true">Button</el-button>

		<el-dialog :visible.sync="visible" title="Hello world">
			<p>Try Element</p>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data: function () {
		return { visible: false };
	},
};
</script>
