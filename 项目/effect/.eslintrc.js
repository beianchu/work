module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/essential', 'eslin:recommened', 'plugin:prettier/recommended'],
	parserOptions: {
		parser: '@babel/eslint-parser'
	},
	rules:{
		'none-console': process.env.NDDE_ENV == 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NDDE_ENV == 'production' ? 'warn' : 'off',
	}

}