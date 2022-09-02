import axios from 'axios'
const url = process.env.REACT_APP_API_BASEURL 
export const appApi =  axios.create({
baseURL: url
})