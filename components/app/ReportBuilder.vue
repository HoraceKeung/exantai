<template>
	<div class="row">
		<div v-if="!isMobile" class="col-md-6 col-lg-4">
			<div class="card p-3"><report-element-tree :reportElements="reportElements" /></div>
		</div>
		<div class="col-md-6 col-lg-8">
			<div class="card p-3">
				<!-- START Global input string -->
				<div class="form-group">
					<label for="global-input-string">{{lang[40]}}
						<i class="fa fa-question-circle ml-1 hoverBlue" aria-hidden="true" data-toggle="tooltip" data-placement="top" :title="lang[41]"></i>
					</label>
					<input type="text" class="form-control" id="global-input-string">
				</div>
				<!-- END Global input string -->
				<!-- START Selected report elements -->
				<div v-for="(e,index) in selectedReportElements" class="card mb-3">
					<div class="position-relative"><button class="btn btn-red btn-top-right" type="button" @click="$store.commit('report/deselectReportElement', index)"><i class="fa fa-times d-block" aria-hidden="true"></i></button></div>
					<div class="card-body"><h4 class="card-title">{{e.name}}</h4></div>
				</div>
				<!-- END Selected report elements -->
				<button v-if="isMobile" type="button" class="btn btn-blue mx-auto">{{lang[39]}}</button>
			</div>
		</div>
	</div>
</template>

<script>
import _ from 'lodash'
import ReportElementTree from '~/components/app/ReportElementTree'
export default {
	components: {ReportElementTree},
	mounted () {
		this.$nextTick(() => {
			this.isMobile = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < 768
			window.addEventListener('resize', _.throttle(() => {
				this.isMobile = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < 768
			}, 100))
		})
	},
	beforeDestroy () {
		window.removeEventListener('resize', _.throttle(() => {
			this.isMobile = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < 768
		}, 100))
	},
	computed: {
		selectedReportElements () { return this.$store.state.report.selectedReportElements },
		reportElements () { return this.$store.state.report.reportElements }
	},
	data () {
		return {
			isMobile: false
		}
	}
}
</script>

<style>
</style>
