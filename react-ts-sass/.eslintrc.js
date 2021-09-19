module.exports = {
	// parser: "babel-eslint",
	parserOptions: {
    "ecmaVersion": 7,
    "sourceType": "module",
		"ecmaFeatures": {
      "jsx": true
    },
	},
	plugins: ["react"],
	extends: [
		'plugin:react/recommended',
		'plugin:prettier/recommended',
	],
	rules: {
		"prettier/prettier": "off",
	},
	settings: {
		// https://github.com/yannickcr/eslint-plugin-react#configuration
		react: {
			"version": "detect", // React version. "detect" automatically picks the version you have installed.
		},
	}
};
