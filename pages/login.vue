<template>
	<section>
		<h1 class="text-center">{{lang[4]}}</h1>
		<vue-form :fields="fields" :btnText="4" :submitFn="logIn" channel="logIn" />
	</section>
</template>

<script>
import VueForm from '~/components/util/VueForm'
import util from '~/assets/js/util'
export default {
	components: {VueForm},
	data () {
		return {
			fields: [
				{name: 'email', label: 15, type: 'email', errMsg: 16},
				{name: 'password', label: 23, type: 'password', errMsg: 24}
			]
		}
	},
	methods: {
		logIn (form) {
			util.logIn(this, form)
		}
	}
}
</script>
