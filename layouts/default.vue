<template>
	<div class="flex-column">
		<nav-bar />
		<div class="flex-grow"><nuxt/></div>
		<page-footer />
	</div>
</template>

<script>
import NavBar from '~/components/site/NavBar'
import PageFooter from '~/components/site/PageFooter'
export default {
	components: {NavBar, PageFooter}
}
</script>

<style scoped>
</style>
