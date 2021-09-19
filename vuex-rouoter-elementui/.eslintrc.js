module.exports = {
	parser: 'vue-eslint-parser', // 解析 .vue 文件
	parserOptions: {
	},
	plugins: [],
	extends: [
		'plugin:vue/recommended',
		'plugin:prettier/recommended',
	],
	rules: {
		"prettier/prettier": "off",
	},
};
