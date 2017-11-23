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
export default {
	components: {NavBar, PageFooter}
}
</script>

<style>
.navbar-offset {
	margin-top: 4rem;
}
h1 {
	text-align: center;
	text-transform: uppercase;
}
</style>
