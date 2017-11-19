// read /assets/js/alertController.js for more information
export const state = () => ({
	currentAlert: null,
	alertQueue: [], // array of alert object
	isCheckingAlertQueue: false,
	alertTimeoutHandles: [],
	alertDuration: 5000
})

export const mutations = {
	setCurrentAlert (state, alert) {
		state.currentAlert = alert
	},
	pushToAlertQueue (state, newAlert) {
		state.alertQueue.push(newAlert)
	},
	setIsCheckingAlertQueue (state, bool) {
		state.isCheckingAlertQueue = bool
	},
	addAlertTimeoutHandle (state, handle) {
		state.alertTimeoutHandles.push(handle)
	},
	clearAlertTimeoutHandles (state) {
		state.alertTimeoutHandles = []
	},
	clearTimeoutForAlertTimeoutHandle (state, key) {
		clearTimeout(state.alertTimeoutHandles[key])
	},
	shiftAlertQueue (state) {
		state.alertQueue.shift()
	}
}
