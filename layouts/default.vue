<template>
	<div class="flex-column">
		<nav-bar />
		<div class="flex-grow navbar-offset bg-light py-5"><nuxt/></div>
		<page-footer />
	</div>
</template>

<script>
import NavBar from '~/components/site/NavBar'
import PageFooter from '~/components/site/PageFooter'
import mixin from '~/assets/js/mixin'
export default {
	mixins: [mixin.global],
	components: {NavBar, PageFooter}
}
</script>

<style scoped>
.navbar-offset {
	margin-top: 4rem;
}
</style>
