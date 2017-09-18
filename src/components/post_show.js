import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {Link} from 'react-router-dom';
import {fetchPost} from '../actions';
import AppShowDate from './show_post_date';



class PostShow extends Component {

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }

    renderComments(){}


    render() {
        console.log('from render we got props: ', this.props);
        const {post} = this.props;
        console.log('after props', post);

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
                <div className="comments">

                </div>
            </section>
        );
    }
}

function mapStateToProps({posts}, ownProps) {
    console.log('From map props:', posts[ownProps.match.params.id]);
    return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost})(PostShow);
