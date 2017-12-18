// Load vue mixin
import Vue from 'vue'
export default ({store}) => {
	Vue.mixin({
		computed: {
			lang () { return store.state.lang }
		}
	})

	// Load lang
	const context = require.context('../static/languages', false, /\.json$/)
	const langs = context.keys().map(k => {
		return k.split('/')[1].split('.')[0]
	})
	store.commit('setLangNames', langs)
	const arr = require('../static/languages/english.json')
	store.commit('setLang', arr)
	store.commit('setCurrentLangName', 'english')

	// Load report elements
	const reportElements = require('../static/reportElements.json')
	store.commit('report/setReportElements', reportElements)
}

// Load bootstrap js
require('bootstrap')

// Load fetch/promise polyfill
require('es6-promise').polyfill()
require('isomorphic-fetch')
