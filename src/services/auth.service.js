const axiosInstance = require('@/apiClient')


module.exports = {
    login: (email, password) => {
        return axiosInstance.post('/auth/login', {
            email,
            password
        })
    },
    register: (payload) => {
        return axiosInstance.post(`/auth/register`, payload)
    },
    refreshToken: () => {
        // todo: implement
    },
}
