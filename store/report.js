export const state = () => ({
	reportElements: [],
	globalInputString: '',
	selectedReportElements: []
})

export const mutations = {
	setReportElements (state, eles) {
		state.reportElements = eles
	},
	setGlobalInputString (state, str) {
		state.globalInputString = str
	},
	setSelectedReportElements (state, arr) {
		state.selectedReportElements = arr
	},
	selectReportElement (state, ele) {
		state.selectedReportElements.push(ele)
	},
	deselectReportElement (state, index) {
		state.selectedReportElements.splice(index, 1)
	}
}
