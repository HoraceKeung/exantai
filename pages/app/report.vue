<template>
	<section>
		<h1>{{lang[35]}}</h1>
		<vue-form :fields="fields" :btnText="27" :submitFn="run" channel="run" />
	</section>
</template>

<script>
import VueForm from '~/components/util/VueForm'
import util from '~/assets/js/util'
export default {
	layout: 'app',
	components: {VueForm},
	data () {
		return {
			fields: [
				{name: 'endPoint', label: 36},
				{name: 'params', label: 37}
			]
		}
	},
	methods: {
		run (form) {
			util.run(this, form.endPoint, form.params).then(r => { console.log(JSON.stringify(r, null, 4)) })
		}
	}
}
</script>

<style>
</style>
