import createPersistedState from 'vuex-persistedstate'

export const plugins = [createPersistedState({
	paths: ['authObj']
})]

export const state = () => ({
	lang: null,
	currentLangName: null,
	langNames: null,
	authObj: null,
	navLinks: [
		{name: 0, path: '/'},
		{name: 1, path: '/product'},
		{name: 2, path: '/about'},
		{name: 3, path: '/contact'}
	],
	currentYear: new Date().getFullYear()
})

export const mutations = {
	setAuthObj (state, obj) {
		state.authObj = obj
	},
	SET_LANG (state, arr) {
		state.lang = arr
	},
	SET_CURRENT_LANG_NAME (state, name) {
		state.currentLangName = name
	},
	SET_LANG_NAMES (state, names) {
		state.langNames = names
	}
}
