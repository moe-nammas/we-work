import axiosConfiguration from './axiosConfig'

const axios = axiosConfiguration("")

export const usersApis = {
    getUsers: async (page) => {
        return await axios.get(`/api/?page=${page}&results=5&seed=abc`)
    }
}