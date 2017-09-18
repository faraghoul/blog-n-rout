import Axios from 'axios'

export const API_URL = 'http://api.blog.testing.singree.com/';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';


export function fetchPosts() {
    const request = Axios.get(API_URL);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback){
    const request = Axios.post(API_URL, values)
        .then( () => callback() );

    return {
       type: CREATE_POST,
       payload: request
    };
}

export function fetchPost(id) {
    const request = Axios.get(`${API_URL}${id}`);

    return {
        type: FETCH_SINGLE_POST,
        payload: request
    };
}