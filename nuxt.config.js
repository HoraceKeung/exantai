const webpack = require('webpack')

module.exports = {
	mode: 'spa',
	/*
	** Headers of the page
	*/
	head: {
		title: 'Exantai Analytics',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Exantai site' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
	** Customize the progress bar color
	*/
	loading: { color: '#016d9b' },
	/*
	** Build configuration
	*/
	build: {
		vendor: ['babel-polyfill', 'jquery', 'popper.js', 'bootstrap'],
		babel: {
			presets: ['env', 'vue-app']
		},
		plugins: [
			new webpack.ProvidePlugin({
				'$': 'jquery',
				'Popper': 'popper.js'
			})
		],
		/*
		** Run ESLint on save
		*/
		extend (config, ctx) {
			if (ctx.dev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	},
	css: [
		'bootstrap/dist/css/bootstrap.css',
		'font-awesome/css/font-awesome.css',
		'@/assets/css/global.scss'
	],
	plugins: ['~/plugins/lang.js', '~/plugins/main.js'],
	router: {
		middleware: 'routeGuard'
	}
}
