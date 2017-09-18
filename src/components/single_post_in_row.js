import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AppShowDate from './show_post_date';

class AppSingleRowArticle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postContent: props.postContent,
            date: props.postContent.created
        };

        console.log(this.state.dateCreated);
    }

    render() {
        return (
            <div className="single-article">
                <AppShowDate date={this.state.date}></AppShowDate>
                <div className="img">
                    <img src="../../assets/back-img.png" alt="" className="img-responsive" />
                </div>
                <div className="article-preview">
                    <h2>
                        {this.state.postContent.title}
                    </h2>
                    {this.state.postContent.metaDescription}
                    <span>
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