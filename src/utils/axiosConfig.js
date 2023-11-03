import Axios from 'axios'

const axiosConfiguration = (apiName) => {
    const axiosConfig = {
        baseURL: `https://randomuser.me/${apiName}`
    }
    return Axios.create(axiosConfig)
}

export default axiosConfiguration