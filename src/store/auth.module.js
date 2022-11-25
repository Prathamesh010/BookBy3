import axiosInstance from '@/apiClient'
import axios from 'axios'

export default {
    state: {
        token: localStorage.getItem('user-token') || '',
        refreshToken: localStorage.getItem('user-refresh-token') || '',
        user: {}
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload.token
            localStorage.setItem('token', payload.token)
        },
        setUser(state, payload) {
            state.user = payload.user
        },
        setRefreshToken(state, payload) {
            state.refreshToken = payload.refreshToken
            localStorage.setItem('refresh-token', payload.refreshToken)
        },
        clearToken(state) {
            state.token = ''
        },
        clearUser(state) {
            state.user = {}
        },
        clearRefreshToken(state) {
            state.refreshToken = ''
        }
    },
    actions: {
        login({ commit }, payload) {
            commit('setLoading', { loading: true })
            return new Promise((resolve, reject) => {
                axiosInstance.post('/auth/login', payload)
                    .then(response => {
                        commit('setLoading', { loading: false })
                        commit('setToken', { token: response.data.token })
                        commit('setUser', { user: response.data.user })
                        commit('setRefreshToken', { refreshToken: response.data.refreshToken })
                        localStorage.setItem('user-token', response.data.token)
                        resolve()
                    })
                    .catch(error => {
                        commit('setLoading', { loading: false })
                        commit('setError', { error: error.message })
                        reject(error)
                    })
            })
        },
        register({ commit }, payload) {
            commit('setLoading', { loading: true })
            return new Promise((resolve, reject) => {
                axiosInstance.post(`/auth/register`, payload)
                    .then(response => {
                        commit('setLoading', { loading: false })
                        commit('setToken', { token: response.data.token })
                        commit('setUser', { user: response.data.user })
                        commit('setRefreshToken', { refreshToken: response.data.refreshToken })
                        localStorage.setItem('user-token', response.data.token)
                        resolve()
                    })
                    .catch(error => {
                        commit('setLoading', { loading: false })
                        commit('setError', { error: error.message })
                        reject(error)
                    })
            })
        },
        logout({ commit }) {
            commit('clearToken')
            commit('clearUser')
            commit('clearRefreshToken')
            localStorage.removeItem('user-token')
            localStorage.removeItem('user-refresh-token')
        },
        refreshToken() {
            return new Promise((resolve, reject) => {
                axios.post('/auth/refresh-token', {
                    refreshToken: localStorage.getItem('user-refresh-token').split(' ')[1]
                })
                    .then(response => {
                        resolve(response)
                    }).catch(error => {
                        reject(error)
                    })
            })
        }
    }
}