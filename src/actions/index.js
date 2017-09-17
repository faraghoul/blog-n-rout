import Axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const API_URL = 'http://api.blog.testing.singree.com/';

export function fetchPosts() {
    const request = Axios.get(API_URL);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values){
    const request = Axios.post(API_URL, values);

    return {
       type: CREATE_POST,
       payload: request
    };
}