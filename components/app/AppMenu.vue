<template>
	<div class="text-white">
		<div class="bg-darkBlue p-3 h-100">
			<div v-for="m in menu" class="o-60 hover100 d-flex pointer mb-3" @click="m.fn">
				<i :class="'my-auto trans fa '+m.icon+(expanded?'':' mx-auto fa-2x')" aria-hidden="true"></i>
				<transition enter-active-class="animated bounceInRight"><p v-if="expanded" class="ml-1 my-auto">{{lang[m.text]}}</p></transition>
			</div>
		</div>
		<div class="menu-footer">
			<div><i @click="expanded=!expanded" :class="'fa-2x o-60 hover100 pointer fa fa-angle-double-'+(expanded?'left':'right')" aria-hidden="true"></i></div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			expanded: true,
			menu: [
				{icon: 'fa-user', text: 34, fn: () => { this.$router.push('/app/account') }},
				{icon: 'fa-file-text', text: 35, fn: () => { this.$router.push('/app/report') }}
			]
		}
	}
}
</script>

<style scoped>
.trans {
	transition: all 0.25s;
}
.menu-footer {
	position: relative;
}
.menu-footer > div {
	padding: 0.25rem;
	position: absolute;
	width: 100%;
	text-align: center;
	bottom: 0px;
}
</style>
