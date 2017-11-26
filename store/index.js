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
	currentYear: new Date().getFullYear(),
	isLoading: []
})

export const mutations = {
	setAuthObj (state, obj) {
		state.authObj = obj
	},
	setLang (state, arr) {
		state.lang = arr
	},
	setCurrentLangName (state, name) {
		state.currentLangName = name
	},
	setLangNames (state, names) {
		state.langNames = names
	},
	newFetch (state, channel) {
		state.isLoading.push(channel)
	},
	fetchDone (state, channel) {
		state.isLoading.splice(state.isLoading.indexOf(channel), 1)
	}
}
