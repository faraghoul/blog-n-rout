import {FETCH_POSTS, FETCH_SINGLE_POST, COMMENT_ADDED} from '../actions';

import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_SINGLE_POST:
            return {...state, [action.payload.data._id] : action.payload.data};

        case FETCH_POSTS:
            console.log( _.mapKeys(action.payload.data.articles, '_id'));
            return _.mapKeys(action.payload.data.articles, '_id');

        default:
            return state;
    }
}

