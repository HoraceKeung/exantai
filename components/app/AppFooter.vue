<template>
	<footer class="footer-shadow p-2 text-right">
		<small>© {{currentYear}} Exantai Analytics</small>
	</footer>
</template>

<script>
export default {
	computed: {
		currentYear () { return this.$store.state.currentYear }
	}
}
</script>

<style scoped>
</style>
