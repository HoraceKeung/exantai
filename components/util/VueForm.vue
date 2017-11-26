<template>
	<div class="container">
		<div class="row">
			<div v-if="offset" class="col-md-2 col-lg-3"></div>
			<div :class="offset?'col-md-8 col-lg-6':'col-12'">
				<form class="mb-3">
					<form-field v-for="f in computedFields" :key="f.name" :form.sync="form" :name="f.name"
					:label="f.label" :type="f.type" :optional="f.optional" :errMsg="f.errMsg"
					:invalid="f.invalid" :options="f.options" :isShowPassword.sync="isShowPassword" :tooltip="f.tooltip" />
					<button :disabled="!formValid" type="submit" class="btn btn-blue mx-auto d-block" @click.prevent="submit">
						<vue-spinner :channel="channel" :text="lang[btnText]" :isWhite="true" />
					</button>
				</form>
				<vue-alert :channel="channel" />
			</div>
		</div>
	</div>
</template>

<script>
import FormField from './FormField'
import VueAlert from './VueAlert'
import VueSpinner from './VueSpinner'
import util from '~/assets/js/util'
export default {
	components: {FormField, VueAlert, VueSpinner},
	props: {
		fields: Array,
		btnText: Number,
		submitFn: Function,
		channel: String,
		offset: {type: Boolean, default: true}
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
			isShowPassword: false,
			form: {},
			submittedOnce: false
		}
	},
	methods: {
		submit () {
			this.submittedOnce = true
			if (this.formValid) { this.submitFn(this.form) }
		}
	}
}
</script>
