import parseWrapper from './parseWrapper'
import zxcvbn from 'zxcvbn'

const util = {...parseWrapper,
	isExist (item) {
		return typeof item !== 'undefined' && item !== null && item !== ''
	},
	checkEmail (email) {
		return util.isExist(email) && /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
	},
	checkPassword (pw) {
		return util.isExist(pw) && zxcvbn(pw).score > 2
	}
}

export default util
