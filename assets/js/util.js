import alertController from './alertController'

const util = {...alertController,
	isExist (item) {
		return typeof item !== 'undefined' && item !== null && item !== ''
	},
	checkEmail (email) {
		return util.isExist(email) && /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
	}
}

export default util
