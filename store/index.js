import createPersistedState from 'vuex-persistedstate'

export const plugins = [createPersistedState({
	paths: ['authObj']
})]

export const state = () => ({
	authObj: null,
	navLinks: [
		{name: 'Home', path: '/'},
		{name: 'Product', path: '/product'},
		{name: 'About', path: '/about'},
		{name: 'Contact', path: '/contact'}
	],
	currentYear: new Date().getFullYear()
})

export const mutations = {
	setAuthObj (state, obj) {
		state.authObj = obj
	}
}
