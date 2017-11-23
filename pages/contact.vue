<template>
	<section>
		<div class="container">
			<h1>{{lang[3]}}</h1>
			<vue-form :fields="fields" :btnText="27" :submitFn="submitContact" />
		</div>
	</section>
</template>

<script>
import VueForm from '~/components/util/VueForm'
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
			console.log(JSON.stringify(form, null, 4))
		}
	}
}
</script>
