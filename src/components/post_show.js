import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {Link} from 'react-router-dom';
import {fetchPost,postComment} from '../actions';
import AppShowDate from './show_post_date';
import PostComments from './post_comments';



class PostShow extends Component {

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }

    renderComments(){}


    render() {
        const {post} = this.props;

        if (!post) {
            return (
                <div>
                    Loading...
                </div>
            );
        }

        return (
            <section className="article-full">
                <div className="article-start-section">
                    <AppShowDate date={post.created}></AppShowDate>
                </div>
                <h1 className="article-header">
                    {post.title}
                </h1>
                <div className="article-body" dangerouslySetInnerHTML={{ __html: post.body }}>
                    {/*{post.body}*/}
                </div>
                <PostComments  doComment={this.props.postComment} reFetch={this.props.fetchPost} author={post.author} comments={post.comments} id={post._id}/>
            </section>
        );
    }
}

function mapStateToProps({posts}, ownProps) {
    return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost,postComment})(PostShow);

