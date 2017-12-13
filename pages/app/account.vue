<template>
	<section>
		<h1>{{lang[34]}}</h1>
		<div class="row">
			<div class="col-md-6">
				<div v-for="d in userData" class="row mb-3">
					<div class="col-sm-6 font-weight-bold">{{lang[d.key]}}</div>
					<div class="col-sm-6">{{d.val}}</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import util from '~/assets/js/util'
export default {
	layout: 'app',
	computed: {
		userData () {
			const u = util.getUser()
			return [
				{key: 31, val: u.get('username')},
				{key: 13, val: u.get('full_name')},
				{key: 17, val: u.get('contact_number')},
				{key: 19, val: u.get('organisation')},
				{key: 25, val: u.get('position')}
			]
		}
	}
}
</script>

<style>
</style>
