import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import PostsReducer from './reducer_posts';
import PagesReducer from './reducer_pages';

const rootReducer = combineReducers({
    posts: PostsReducer,
    pagesCount: PagesReducer,
    form: FormReducer
});

export default rootReducer;
