import alertController from './alertController'
import _ from 'lodash'
var Parse = require('parse')
// Parse.initialize('08945a47-466a-4a9f-8dcd-cc6296258f0a', 'javascriptKey', 'a217bcdd-390a-4d42-8b36-1eae685c6ce0')
// Parse.serverURL = 'http://localhost:5000/parse'

// Uncomment the following when running on heroku
Parse.initialize('08945a47-466a-4a9f-8dcd-cc6296258f0a')
Parse.serverURL = 'https://exantaiparse.herokuapp.com/parse'

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
		user.signUp(null).then(r => {
			$store.commit('fetchDone', 'signUp')
			$router.push('/app/account')
		}, err => {
			$store.commit('fetchDone', 'signUp')
			alertController.callAlert({$store}, 'signUp', 'danger', err.message)
		})
	},
	logIn ({$store, $router}, payload) {
		$store.commit('newFetch', 'logIn')
		Parse.User.logIn(payload.email, payload.password).then(user => {
			$store.commit('fetchDone', 'logIn')
			$router.push('/app/account')
		}, err => {
			$store.commit('fetchDone', 'logIn')
			alertController.callAlert({$store}, 'logIn', 'danger', err.message)
		})
	},
	logOut ({$store, $router}) {
		Parse.User.logOut().then(() => { $router.push('/login') })
	},
	getUser () {
		return Parse.User.current()
	},
	run ({$store}, endPoint, params, channel = 'run') {
		$store.commit('newFetch', channel)
		return Parse.Cloud.run(endPoint, params).then(r => {
			$store.commit('fetchDone', channel)
			return r
		}).catch(err => {
			console.log(JSON.stringify(err, null, 4))
			$store.commit('fetchDone', channel)
		})
	}
}

export default parseWrapper
