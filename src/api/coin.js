import apiUrl from '../apiConfig'
import axios from 'axios'

// each route from backend API for coins

// create
export const coinCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/coins',
		data: {
			coin: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

// coin index
export const coinIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/coins'
	})
}

// coin index search results
export const coinSearchResults = (user, name) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/coins/' + name
	})
}

// coin show
export const coinShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/coins/' + id
	})
}

// local coin show
export const localCoinShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/coins/watchlist/' + id
	})
}



// game delete
export const coinDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/coins/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}