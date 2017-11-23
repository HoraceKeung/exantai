// Load vue mixin
import Vue from 'vue'
Vue.mixin({
	computed: {
		lang () { return this.$store.state.lang }
	}
})

// Load bootstrap js
require('bootstrap')

// Load fetch/promise polyfill
require('es6-promise').polyfill()
require('isomorphic-fetch')
