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
		url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false" + '/coins',
        headers: {
			Authorization: `Token token=${user.token}`,
		}
	})
}

// coin show
export const coinShow = (user, apiId) => {
	return axios({
		method: 'GET',
		url: "https://api.coingecko.com/api/v3" + '/coins/' + apiId
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


// export const coinIndex = (user) => {
//     return axios({
//         method: 'GET',
//         url: apiUrl + '/coins'
//     })
// }
// async function coinsIndex(req, res) {
//     const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
//     const response = await fetch(url);
//     const data = await response.json()
//     res.json(data)

}