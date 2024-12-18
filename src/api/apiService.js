import axios from "axios";

const DEFAULT_URL = import.meta.env.VITE_DEFAULT_URL;
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

const apiClient = axios.create({
    baseURL:DEFAULT_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization:`Client-ID ${ACCESS_KEY}`
    },

})

apiClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


apiClient.interceptors.response.use((response) => {
    return response;
}, (error) => {

    const customError = {
        message: error.response?.data?.message || 'Something went wrong!',
        status: error.response?.status || 500,
    };
    return Promise.reject(customError);
})

export default apiClient;