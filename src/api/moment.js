import axios from '@/plugins/axios'

export function getMomentById(id) {
	return axios({
		url: 'moment',
		method: 'GET',
		params: {
			id
		}
	})
}


export function saveMoment(moment) {
	return axios({
		url: 'moment',
		method: 'POST',
		data: {
			...moment
		}
	})
}

export function updateMoment(moment) {
	return axios({
		url: 'moment',
		method: 'PUT',
		data: {
			...moment
		}
	})
}