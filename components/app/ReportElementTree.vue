<template>
	<div>
		<div v-for="(x,index) in reportElements">
			<p class="hoverBlue pointer" @click="x.children?toggle(index):selectReportElement(x)"><i :class="'fa fa-'+(x.children?('folder'+(isOpen.includes(index)?'-open':'')):'file-o')" aria-hidden="true"></i> {{x.name}}</p>
			<div class="ml-4"><report-element-tree v-if="x.children&&isOpen.includes(index)" :reportElements="x.children" /></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ReportElementTree',
	props: {
		reportElements: {type: Array, required: true}
	},
	data () {
		return {
			isOpen: []
		}
	},
	methods: {
		toggle (index) {
			const i = this.isOpen.indexOf(index)
			if (i === -1) { this.isOpen.push(index) } else { this.isOpen.splice(i, 1) }
		},
		selectReportElement (ele) {
			this.$store.commit('report/selectReportElement', ele)
		}
	}
}
</script>

<style>
</style>
