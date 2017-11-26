const alertController = {
	callAlert: function ({$store}, channel = 'default', type = 'danger', message = $store.state.lang[28]) {
		var newAlert = {
			type, // success/danger/info/warning
			message, // string
			channel // only matching channel will display alert
		}
		$store.commit('alert/pushToAlertQueue', newAlert)
		if (!$store.state.alert.isCheckingAlertQueue) {
			checkAlertQueue($store)
		}
	}
}

function checkAlertQueue (store) {
	if (store.state.alert.alertQueue.length > 0) {
		store.commit('alert/setIsCheckingAlertQueue', true)
		store.commit('alert/setCurrentAlert', store.state.alert.alertQueue[0])
		store.commit('alert/addAlertTimeoutHandle', store.state.alert.alertTimeoutHandles.length, setTimeout(function () { endAlert(store) }, store.state.alert.alertDuration))
	} else {
		store.commit('alert/setIsCheckingAlertQueue', false)
		store.commit('alert/clearAlertTimeoutHandles')
	}
}

function endAlert (store) {
	store.commit('alert/shiftAlertQueue')
	store.commit('alert/setCurrentAlert', null)
	store.commit('alert/clearTimeoutForAlertTimeoutHandle', store.state.alert.alertTimeoutHandles.length)
	setTimeout(function () { checkAlertQueue(store) }, 1000)
}

export default alertController
