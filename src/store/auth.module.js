import { login, register } from '@/services/auth.service'
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
            localStorage.setItem('user-token', payload.token)
        },
        setUser(state, payload) {
            state.user = payload.user
        },
        setRefreshToken(state, payload) {
            state.refreshToken = payload.refreshToken
            localStorage.setItem('user-refresh-token', payload.refreshToken)
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
            login(payload.email, payload.password)
                .then(response => {
                    commit('setLoading', { loading: false })
                    commit('setToken', { token: response.data.token })
                    commit('setUser', { user: response.data.user })
                    commit('setRefreshToken', { refreshToken: response.data.refreshToken })
                    localStorage.setItem('user-token', response.data.token)
                })
                .catch(error => {
                    commit('setLoading', { loading: false })
                    commit('setError', { error: error.message })
                })
        },
        register({ commit }, payload) {
            commit('setLoading', { loading: true })
            register(payload)
                .then(response => {
                    commit('setLoading', { loading: false })
                    commit('setToken', { token: response.data.token })
                    commit('setUser', { user: response.data.user })
                    commit('setRefreshToken', { refreshToken: response.data.refreshToken })
                    localStorage.setItem('user-token', response.data.token)
                })
                .catch(error => {
                    commit('setLoading', { loading: false })
                    commit('setError', { error: error.message })
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