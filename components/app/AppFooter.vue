<template>
	<footer class="footer-shadow p-2 d-flex">
		<div><small>© {{currentYear}} Exantai Analytics</small></div>
		<div @click="logOut" class="ml-auto pointer d-flex red hoverDarkRed">
			<i class="fa fa-sign-out my-auto" aria-hidden="true"></i><small>{{lang[38]}}</small>
		</div>
	</footer>
</template>

<script>
import util from '~/assets/js/util'
export default {
	computed: {
		currentYear () { return this.$store.state.currentYear }
	},
	methods: {
		logOut () { util.logOut(this) }
	}
}
</script>

<style scoped>
</style>
