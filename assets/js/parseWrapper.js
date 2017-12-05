import alertController from './alertController'
import _ from 'lodash'
var Parse = require('parse')
Parse.initialize('08945a47-466a-4a9f-8dcd-cc6296258f0a', 'javascriptKey', 'a217bcdd-390a-4d42-8b36-1eae685c6ce0')
Parse.serverURL = 'http://localhost:5000/parse'

// Uncomment the following when running on heroku
// Parse.initialize('08945a47-466a-4a9f-8dcd-cc6296258f0a')
// Parse.serverURL = 'https://exantaiparse.herokuapp.com/parse'

const parseWrapper = {...alertController,
	signUp ({$store, $router}, payload) {
		var user = new Parse.User()
		_.forEach(payload, (val, key) => {
			if (key === 'email') {
				user.set('username', val)
			} else {
				user.set(key, val)
			}
		})
		$store.commit('newFetch', 'signUp')
		user.signUp(null).then((response) => {
			$store.commit('fetchDone', 'signUp')
			$router.push('/login')
		}, (error) => {
			$store.commit('fetchDone', 'signUp')
			alertController.callAlert('top', error.message, 'danger')
		})
	}
}

export default parseWrapper
