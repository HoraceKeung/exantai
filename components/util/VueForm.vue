<template>
	<div class="row">
		<div class="col-md-2 col-lg-3"></div>
		<div class="col-md-8 col-lg-6">
			<form>
				<form-field v-for="f in computedFields" :key="f.name" :form.sync="form" :name="f.name"
				:label="f.label" :type="f.type" :optional="f.optional" :errMsg="f.errMsg"
				:invalid="f.invalid" />
				<button :disabled="!formValid" type="submit" class="btn btn-blue mx-auto d-block" @click.prevent="submit">{{lang[btnText]}}</button>
			</form>
		</div>
	</div>
</template>

<script>
import FormField from './FormField'
import util from '~/assets/js/util'
export default {
	components: {FormField},
	props: {
		fields: Array,
		btnText: Number,
		submitFn: Function
	},
	computed: {
		computedFields () {
			return this.fields.map(f => {
				let clone = JSON.parse(JSON.stringify(f))
				const validate = () => {
					switch (f.type) {
					case 'email':
						return util.checkEmail(this.form[f.name])
					default:
						return util.isExist(this.form[f.name])
					}
				}
				clone.invalid = this.submittedOnce && !f.optional && !validate()
				return clone
			})
		},
		formValid () {
			for (let i = 0; i < this.computedFields.length; i++) {
				if (this.computedFields[i].invalid) { return false }
			}
			return true
		}
	},
	data () {
		return {
			form: {},
			submittedOnce: false
		}
	},
	methods: {
		submit () {
			this.submittedOnce = true
			this.submitFn(this.form)
		}
	}
}
</script>

<style>
</style>
