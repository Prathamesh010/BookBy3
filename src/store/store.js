import auth from './auth.module'
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        error: null,
        loading: false,
    },
    mutations: {
        setError(state, payload) {
            state.error = payload.error
        },
        clearError(state) {
            state.error = null
        },
        setLoading(state, payload) {
            state.loading = payload.loading
        },
        clearLoading(state) {
            state.loading = false
        }
    },
    modules: {
        auth
    }
})
