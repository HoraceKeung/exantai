<template>
	<div class="form-group">
		<label :for="label">{{lang[label]}}<small v-if="optional"> ({{lang[12]}})</small>
			<i v-if="tooltip" class="fa fa-question-circle ml-1 hoverBlue" aria-hidden="true" data-toggle="tooltip" data-placement="top" :title="tooltip"></i>
		</label>
		<textarea v-if="type==='textarea'" @input="update($event.target.value)" :class="'form-control'+(invalid?' is-invalid':'')" :id="label" rows="3"></textarea>
		<!-- START Checkbox/Radio -->
		<div v-else-if="type==='checkbox'||type==='radio'">
			<label v-for="o in options" class="pointer d-block position-relative customCheckboxRadio" :for="o.text">
				<input :id="o.text" :type="type" :value="o.value" :name="name"
				@click="type==='checkbox'?updateCheckbox($event.target.value):update($event.target.value)">
				<span :class="'bg-white '+(type==='checkbox'?'rounded checkmark':'rounded-circle checkmark-radio')" />{{lang[o.text]}}
			</label>
		</div>
		<!-- END Checkbox/Radio -->
		<div v-else class="input-group">
			<input @input="update($event.target.value)" :type="computedType" :class="'form-control'+(invalid?' is-invalid':'')+(type==='contactNumber'?' contactNumber':'')" :id="label">
			<div v-if="type==='password'" class="input-group-addon pointer bg-white hoverBlueTextWhite" @click="$emit('update:isShowPassword', !isShowPassword)">
				<i :class="'fa fa-eye'+(isShowPassword?'-slash':'')" aria-hidden="true"></i>
			</div>
		</div>
		<div :class="'invalid-feedback'+(invalid?' d-block':'')">{{lang[errMsg]}}</div>
	</div>
</template>

<script>
import $ from 'jquery'
import _ from 'lodash'
export default {
	props: {
		form: Object,
		name: String,
		label: Number,
		type: {type: String, default: 'text'},
		optional: {type: Boolean, default: false},
		errMsg: {type: Number, default: 11},
		invalid: {type: Boolean, default: false},
		options: Array,
		isShowPassword: Boolean,
		tooltip: String
	},
	mounted () {
		this.$nextTick(() => {
			$(function () {
				$('[data-toggle="tooltip"]').tooltip()
			})
		})
	},
	computed: {
		computedType () {
			switch (this.type) {
			case 'contactNumber':
				return 'number'
			case 'password':
				return this.isShowPassword ? 'text' : 'password'
			default:
				return this.type
			}
		}
	},
	methods: {
		update (val) {
			let newForm = JSON.parse(JSON.stringify(this.form))
			newForm[this.name] = val
			this.$emit('update:form', newForm)
		},
		updateCheckbox (val) {
			let newForm = JSON.parse(JSON.stringify(this.form))
			if (typeof newForm[this.name] === 'undefined') {
				newForm[this.name] = []
			}
			if (_.includes(newForm[this.name], val)) {
				_.remove(newForm[this.name], x => {
					return x === val
				})
			} else {
				newForm[this.name].push(val)
			}
			this.$emit('update:form', newForm)
		}
	}
}
</script>

<style scoped>
@import '../../assets/css/color.css';
.contactNumber::-webkit-inner-spin-button,
.contactNumber::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
.customCheckboxRadio {
	padding-left: 2rem;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
/* Hide the browser's default checkbox */
.customCheckboxRadio input {
	position: absolute;
	opacity: 0;
}
/* Create a custom checkbox */
.checkmark, .checkmark-radio {
	position: absolute;
	top: 0;
	left: 0;
	height: 1.5rem;
	width: 1.5rem;
	border: 1px solid var(--text);
}
/* When the checkbox is checked, add a blue background */
.customCheckboxRadio input:checked ~ .checkmark, .customCheckboxRadio input:checked ~ .checkmark-radio {
	background-color: var(--blue) !important;
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after, .checkmark-radio:after {
	content: "";
	position: absolute;
	display: none;
}
/* Show the checkmark when checked */
.customCheckboxRadio input:checked ~ .checkmark:after, .customCheckboxRadio input:checked ~ .checkmark-radio:after {
	display: block;
}
/* Style the checkmark/indicator */
.customCheckboxRadio .checkmark:after {
	left: 0.6rem;
	top: 0.3rem;
	width: 0.35rem;
	height: 0.6rem;
	border: solid white;
	border-width: 0 3px 3px 0;
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
}
.customCheckboxRadio .checkmark-radio:after {
	top: 0.45rem;
	left: 0.45rem;
	width: 0.5rem;
	height: 0.5rem;
	border-radius: 50%;
	background: #fff;
}
</style>
