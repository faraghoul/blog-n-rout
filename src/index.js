import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ReduxPromise from 'redux-promise';


import reducers from './reducers';
import AppHeader from './components/app-header';
import PostIndex from './components/post_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';
import AppSidebar from './components/app_sidebar';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <AppHeader />
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <Switch>
                                <Route path="/posts/create" component={PostNew} />
                                <Route path="/posts/:id" component={PostShow} />
                                <Route path="/" component={PostIndex} />
                            </Switch>
                        </div>
                        <div className="col-md-3">

                                <Link
                                    className="nav-link"
                                    to="/posts/create">
                                    Create a new masterpiece!
                                </Link>

                            <AppSidebar/>
                        </div>
                    </div>
                </div>

            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.app-root'));
