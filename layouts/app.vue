<template>
	<div class="d-flex" id="app-layout">
		<app-menu />
		<div class="flex-column w-100">
			<app-header />
			<div class="flex-grow header-offset bg-light py-3"><div class="container-fluid"><nuxt/></div></div>
			<app-footer />
		</div>
	</div>
</template>

<script>
import AppMenu from '~/components/app/AppMenu'
import AppHeader from '~/components/app/AppHeader'
import AppFooter from '~/components/app/AppFooter'
import mixin from '~/assets/js/mixin'
export default {
	mixins: [mixin.global],
	components: {AppMenu, AppHeader, AppFooter}
}
</script>

<style scoped>
#app-layout {
	overflow-x: hidden;
}
.header-offset {
	margin-top: 3rem;
}
</style>
