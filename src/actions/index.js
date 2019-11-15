import axios from 'axios';
export const FETCH_POST = "FETCH_POST";

export const fetchPost = () => {
    const ROOT_URL= 'http://reduxblog.herokuapp.com/api/';
    const API_KEY = '?key=AdityaShyamKey'
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

    return {
        type: FETCH_POST,
        payload: request
    }
}
