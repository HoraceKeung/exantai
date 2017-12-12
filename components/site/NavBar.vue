<template>
	<nav class="navbar header-shadow fixed-top navbar-expand-lg bg-white">
		<div class="container">
			<router-link to="/"><img class="navbar-brand" src="~/assets/img/logo.png"></router-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li v-for="l in navLinks" class="nav-item">
						<router-link :class="'nav-link text-uppercase '+($route.path===l.path?'darkBlue':'text-color hoverBlue')" :to="l.path">{{lang[l.name]}}</router-link>
					</li>
				</ul>
				<router-link class="btn btn-grey hoverWhite mr-2" to="/login">{{lang[4]}}</router-link>
				<router-link class="btn btn-blue hoverWhite" to="/sign-up">{{lang[5]}}</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	computed: {
		navLinks () { return this.$store.state.navLinks }
	}
}
</script>

<style scoped>
.navbar-brand {
	height: 3rem;
}
.navbar-toggler-icon {
	background-image: url('~/assets/img/menu.svg');
}
</style>
