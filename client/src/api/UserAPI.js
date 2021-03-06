import { apiUrl } from '.'
import axios from 'axios';

export const fetchUsers = async (query) => {
        try {
           const { data } = await axios.get(`${apiUrl}/users/search/${query}`)
           return data.users
        } catch (err) {
            console.warn(err.message)
        }
}

export const authList = async (id) => {
    try {
       const { data } = await axios.get(`${apiUrl}/users/${id}/holidays`)
       return data.holidays.map(h => h.id)
    } catch (err) {
        console.warn(err.message)
    }
}