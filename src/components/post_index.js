import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import {getPagesQuant} from '../actions';
import _ from 'lodash';

import AppSingleRowArticle from './single_post_in_row';

class PostIndex extends Component {



    componentDidMount() {
        this.props.fetchPosts(1);
        this.props.getPagesQuant();
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


    renderPagination(){
        var loopPage = [];
         if(this.props.pages) {
             for (let i = 1; i <= this.props.pages; i++) {
                 loopPage.push(
                     <div onClick={()=>(this.props.fetchPosts(i))}
                         key={i}>
                         {i}
                     </div>);
             }
             return loopPage;
         }
    }


    render() {
        console.log('From render method: ', this.props.posts);
        if (this.props.posts === null) {
            return (
                <div>loading</div>
            );
        }
        return (
            <section>
                <div>
                    {this.renderPosts()}
                </div>
                <div className="pagination-sec">
                    {this.renderPagination()}
                </div>
            </section>


        )

    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        pages: state.pagesCount
    };
}

export default connect(mapStateToProps, {fetchPosts, getPagesQuant})(PostIndex);