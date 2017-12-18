import $ from 'jquery'

const mixin = {
	global: {
		mounted () {
			this.$nextTick(() => {
				$(() => { $('[data-toggle="tooltip"]').tooltip() })
			})
		}
	}
}

export default mixin
