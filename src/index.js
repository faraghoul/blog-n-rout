import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ReduxPromise from 'redux-promise';


import reducers from './reducers';
import AppHeader from './components/app-header';
import PostIndex from './components/post_index';
import PostNew from './components/post_new';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <AppHeader />
                <Switch>
                    <Route path="/posts/create" component={PostNew}/>
                    <Route path="/" component={PostIndex}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.app-root'));
