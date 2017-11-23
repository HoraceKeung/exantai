<template>
	<footer>
		<div class="container py-4 text-center">
			<div class="row">
				<div class="col-md-2"></div>
				<div class="col-sm-6 col-md-2 mb-3" v-for="l in navLinks">
					<router-link :class="'text-uppercase text-white'+($route.path===l.path?'':' o-60 hover100')" :to="l.path">{{lang[l.name]}}</router-link>
				</div>
			</div>
			<div><a v-for="s in social" :href="s.href"><i :class="'fa fa-2x text-white o-60 hover100 pointer mx-2 '+s.icon" aria-hidden="true"></i></a></div>
			<div class="border border-white border-bottom-0 my-3"></div>
			<small class="text-white">© {{currentYear}} Exantai Analytics<span v-for="m in minorLinks"> | <router-link class="text-white o-60 hover100" :to="m.path">{{lang[m.name]}}</router-link></span></small>
		</div>
	</footer>
</template>

<script>
export default {
	computed: {
		navLinks () { return this.$store.state.navLinks },
		currentYear () { return this.$store.state.currentYear }
	},
	data () {
		return {
			social: [
				{icon: 'fa-twitter-square', href: ''},
				{icon: 'fa-linkedin-square', href: ''}
			],
			minorLinks: [
				{name: 6, path: '/faq'},
				{name: 7, path: '/terms'}
			]
		}
	}
}
</script>

<style scoped>
@import '../../assets/css/color.css';
footer {
	background-color: var(--darkBlue);
}
</style>
