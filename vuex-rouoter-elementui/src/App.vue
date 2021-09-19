<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/vuex">Vuex</router-link>
		</div>
		<router-view />
	</div>
</template>

<script>
export default {
	data() {
		return {
			count: 0,
			inputValue: '',
		};
	},
	methods: {
		handleIncrement: function () {
			this.count = this.count + 1;
		},
	},
};
</script>

<style scoped lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
