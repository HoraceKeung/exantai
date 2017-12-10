<template>
	<section>
		<h1 class="site-h1">{{lang[5]}}</h1>
		<vue-form :fields="fields" :btnText="27" :submitFn="signUp" channel="signUp" />
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
				{name: 'password', label: 23, type: 'password', errMsg: 24, strict: true, tooltip: 33},
				{name: 'full_name', label: 13, errMsg: 14},
				{name: 'contact_number', label: 17, type: 'contactNumber', errMsg: 18},
				{name: 'organisation', label: 19, errMsg: 20},
				{name: 'position', label: 25, errMsg: 26},
				{
					name: 'marketing_consent',
					label: 30,
					type: 'checkbox',
					optional: true,
					options: [
						{text: 31, value: 'email'},
						{text: 32, value: 'phone'}
					]
				}
			]
		}
	},
	methods: {
		signUp (form) {
			util.signUp(this, form)
		}
	}
}
</script>
