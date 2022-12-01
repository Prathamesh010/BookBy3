import axios from 'axios';
import store from './store/store';
import router from './router/index';

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL
})

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response.status === 401) {
            //  skip the route if login or register
            if (error.config.url === '/auth/login' || error.config.url === '/auth/register') {
                return Promise.reject(error)
            }
            axiosInstance.post('/auth/refreshToken', {
                refreshToken: localStorage.getItem('refresh-token').split(' ')[1]
            }).then(response => {
                store.dispatch('refreshTokens', {
                    token: response.data.token,
                    refreshToken: response.data.refreshToken
                })
                error.response.config.headers['Authorization'] = response.data.token
                return axiosInstance(error.response.config)
            }).catch(e => {
                console.log(e)
                store.dispatch('logout')
                router.push('/login')
                return Promise.reject(e)
            })
        }
        return Promise.reject(error)
    }
);

axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
);

export default axiosInstance;