<template>
	<transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOut">
		<div v-if="currentAlert&&currentAlert.channel===channel" :class="'alert alert-'+currentAlert.type" role="alert">
			<i :class="'fa '+alertIcon" ara-hidden="true"></i> {{currentAlert.message}}
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		channel: {type: String, default: 'default'}
	},
	computed: {
		currentAlert () { return this.$store.state.alert.currentAlert },
		alertIcon () {
			switch (this.currentAlert.type) {
			case 'success':
				return 'fa-check-circle'
			case 'danger':
				return 'fa-exclamation-triangle'
			}
		}
	}
}
</script>
