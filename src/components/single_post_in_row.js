import React, {Component} from 'react';
import Moment from 'moment';

class AppSingleRowArticle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postContent: props.postContent,
            dateCreated: Moment(props.postContent.created.slice(0,10), "MM-DD-YYYY")
        };
    }

    render() {
        return (
            <div className="single-article">
                <div className="date">
                    <p className="day-date">
                        {this.state.dateCreated.format('DD')}
                    </p>
                    <p className="rest-data">
                        <span className="week-day">{this.state.dateCreated.format('dddd')}</span><br/>
                        <span className="month-year">{this.state.dateCreated.format('MMMM YYYY')}</span>
                    </p>
                </div>
                <div className="img">
                    <img src="../../assets/back-img.png" alt="" className="img-responsive" />
                </div>
                <div className="article-preview">
                    <h2>
                        {this.state.postContent.title}
                    </h2>
                    {this.state.postContent.metaDescription}
                    <span>
                      continue reading
                  </span>
                </div>
            </div>
        );
    }

}


export default AppSingleRowArticle;