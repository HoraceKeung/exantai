import util from '~/assets/js/util'

export default function ({ redirect, route, store }) {
	if (route.path.includes('/app/') && !util.getUser()) { redirect('/login') }
}
