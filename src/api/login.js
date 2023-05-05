import axios from '@/plugins/axios'

export function login(loginForm) {
	return axios({
		url: 'login',
		method: 'POST',
		data: {
			...loginForm
		}
	})
}
export function register(loginForm) {
	return axios({
		url: 'register',
		method: 'POST',
		data: {
			...loginForm
		}
	})
}