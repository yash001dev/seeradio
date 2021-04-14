import axios from 'axios';
// import { getToken } from '../Utils/helper';

const baseUrl = process.env.REACT_APP_API_URL;

// const HandleError = (error) => {
//     const { response } = error
//     if (error && response) {
//         throw response.data.errorMessage
//     }
//     throw error.message
// }

// const getConfig = (isTextPlainData) => {

//     if (isTextPlainData) {
//         return {
//             'Content-Type': 'multipart/formdata',
//             'x-token': getToken()
//         }
//     }
//     return {
//         'x-token': getToken()
//     }
// }

// export const publicGet = (url, params) => {
//     return axios
//         .get(baseUrl + url, { params })
//         .then(res => res.data.data)
//         .catch(err => HandleError(err))
// }  

// export const publicPost = (url, payload) => {
//     return axios
//         .post(baseUrl + url, payload)
//         .then(res => res.data.data)
//         .catch(err => HandleError(err))
// }

export const get = (url, params,token) => {
    return axios
        .get(baseUrl + url, { params, headers: { 'x-token': token } })
        .then(res => res.data)
        .catch(err => alert(err))
}

