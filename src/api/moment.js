import axios from '@/plugins/axios'

<<<<<<< HEAD
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
=======
export function getMomentListByQuery(queryInfo) {
    return axios({
        url: 'moments',
        method: 'GET',
        params: {
            ...queryInfo
        }
    })
}

export function updatePublished(id, published) {
    return axios({
        url: 'moment/published',
        method: 'PUT',
        params: {
            id,
            published
        }
    })
}

export function getMomentById(id) {
    return axios({
        url: 'moment',
        method: 'GET',
        params: {
            id
        }
    })
}

export function deleteMomentById(id) {
    return axios({
        url: 'moment',
        method: 'DELETE',
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
>>>>>>> 0ad638ffd0fef0b1ccd287e35628ac8b2399dc82
}