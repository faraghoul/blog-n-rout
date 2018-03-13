import {GET_PAGES} from '../actions';

export default function (state = 0, action) {
    switch (action.type) {
        case GET_PAGES:
            return action.payload.data.pagesCount;

        default:
            return state;
    }
}
