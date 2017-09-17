import Axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS';
export const API_URL = 'http://api.blog.testing.singree.com/';

export function fetchPosts() {
    const request = Axios.get(API_URL);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}