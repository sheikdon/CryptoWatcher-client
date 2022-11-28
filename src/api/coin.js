import apiUrl from '../apiConfig'
import axios from 'axios'

export const coinIndex = (user) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/coins'
    })
}
