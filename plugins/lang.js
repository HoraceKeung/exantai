export default ({store}) => {
	const context = require.context('../static/languages', false, /\.json$/)
	const langs = context.keys().map(k => {
		return k.split('/')[1].split('.')[0]
	})
	store.commit('SET_LANG_NAMES', langs)
	const arr = require('../static/languages/english.json')
	store.commit('SET_LANG', arr)
	store.commit('SET_CURRENT_LANG_NAME', 'english')
}
