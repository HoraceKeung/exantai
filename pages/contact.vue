<template>
	<section>
		<h1 class="text-center">{{lang[3]}}</h1>
		<vue-form :fields="fields" :btnText="27" :submitFn="submitContact" channel="contact" />
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
				{name: 'name', label: 13, errMsg: 14},
				{name: 'email', label: 15, type: 'email', errMsg: 16},
				{name: 'contact_number', label: 17, type: 'contactNumber', optional: true},
				{name: 'organisation', label: 19, optional: true},
				{name: 'message', label: 21, type: 'textarea', errMsg: 22}
			]
		}
	},
	methods: {
		submitContact (form) {
			this.$store.commit('newFetch', 'contact')
			fetch('https://formspree.io/horacekeung@hotmail.com', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(form)
			}).then(r => {
				this.$store.commit('fetchDone', 'contact')
				if (r.status >= 200 && r.status < 300) {
					util.callAlert(this, 'contact', 'success', this.lang[29])
				} else {
					util.callAlert(this, 'contact')
				}
			})
		}
	}
}
</script>
