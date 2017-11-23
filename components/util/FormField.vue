<template>
	<div class="form-group">
		<label :for="label">{{lang[label]}}<small v-if="optional"> ({{lang[12]}})</small></label>
		<textarea v-if="type==='textarea'" @input="update($event.target.value)" :class="'form-control'+(invalid?' is-invalid':'')" :id="label" rows="3"></textarea>
		<input v-else @input="update($event.target.value)" :type="computedType" :class="'form-control'+(invalid?' is-invalid':'')+(type==='contactNumber'?' contactNumber':'')" :id="label">
		<div class="invalid-feedback">{{lang[errMsg]}}</div>
	</div>
</template>

<script>
export default {
	props: {
		form: Object,
		name: String,
		label: Number,
		type: {type: String, default: 'text'},
		optional: {type: Boolean, default: false},
		errMsg: {type: Number, default: 11},
		invalid: {type: Boolean, default: false}
	},
	computed: {
		computedType () {
			return this.type === 'contactNumber' ? 'number' : this.type
		}
	},
	methods: {
		update (val) {
			let newForm = JSON.parse(JSON.stringify(this.form))
			newForm[this.name] = val
			this.$emit('update:form', newForm)
		}
	}
}
</script>

<style scoped>
.contactNumber::-webkit-inner-spin-button,
.contactNumber::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
</style>
