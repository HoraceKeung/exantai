import createPersistedState from 'vuex-persistedstate'

export const plugins = [createPersistedState({
	paths: ['authObj']
})]

export const state = () => ({
	authObj: null
})

export const mutations = {
	setAuthObj (state, obj) {
		state.authObj = obj
	}
}
