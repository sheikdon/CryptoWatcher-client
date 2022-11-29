import apiUrl from '../apiConfig'
import axios from 'axios'



export const coinIndex = (user) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/coins'
    })
}
async function coinsIndex(req, res) {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
    const response = await fetch(url);
    const data = await response.json()
    res.json(data)
}