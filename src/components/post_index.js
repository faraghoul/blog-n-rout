import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';

import AppSingleRowArticle from './single_post_in_row';

class PostIndex extends Component{

    componentDidMount(){
        this.props.fetchPosts();

    }

    renderPosts() {
        return _.map(this.props.posts,
            post => {
                return (
                    <AppSingleRowArticle
                        key={post._id}
                        postContent={post}
                    />
                )
            });
    }


    render(){
        console.log('From render method: ', this.props.posts);
        if (this.props.posts === null) {
            return (
                <div>loading</div>
            );
        }
        return (
            <div>
                {this.renderPosts()}
            </div>
        )

    }
}

function mapStateToProps(state) {
    return{
        posts: state.posts
    };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);