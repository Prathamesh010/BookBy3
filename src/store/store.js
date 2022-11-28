import auth from './auth.module'
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        error: null,
        loading: false,
        isLoggedIn: localStorage.getItem('token') ? true : false,
        formDialog: false,
    },
    mutations: {
        setError(state, payload) {
            state.error = payload.error
        },
        clearError(state) {
            state.error = null
        },
        loading(state, payload) {
            state.loading = payload
        },
        setLoggedIn(state, payload) {
            state.isLoggedIn = payload.isLoggedIn
        },
        setFormDialog(state, payload) {
            state.formDialog = payload
        }
    },
    modules: {
        auth
    }
})
