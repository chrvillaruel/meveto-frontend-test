import axios from 'axios'

const API_URL = process.env.REACT_APP_API_BASE_URL;

// can also create an axios instance specifically for the backend API
const api = axios.create({
    baseURL: API_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})


export { api }