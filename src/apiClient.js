const axios = require('axios')

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL
})

axiosInstance.interceptors.request.use(
    config => {
        console.log('interceptors.request')
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

module.exports = axiosInstance