import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AppShowDate from './show_post_date';

class AppSingleRowArticle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postContent: props.postContent,
        };
    }

    render() {
        return (
            <div className="single-article">
                <AppShowDate date={this.state.postContent.created}></AppShowDate>
                <div className="img">
                    <img src="../../assets/back-img.png" alt="" className="img-responsive" />
                </div>
                <div className="article-preview">
                    <h2>
                        {this.state.postContent.title}
                    </h2>
                    {this.state.postContent.metaDescription}
                    <span className="link-wrap-post-row">
                        <Link to={`/posts/${this.state.postContent._id}`}>
                           Continue reading
                        </Link>
                  </span>
                </div>
            </div>
        );
    }

}


export default AppSingleRowArticle;