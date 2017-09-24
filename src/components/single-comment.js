import React, {Component} from 'react';
import Moment from 'moment';
class SingleComment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: props.comment
		}
	}


	render() {
		return (
			<li className="single-comment">
				<div className="body-comment">
					<span className="authName">
						Author is: {this.state.comment.authorName}
					</span>
					<p className="post-body">
						{this.state.comment.text}
					</p>
					<div className="comment-date">
						{this.state.comment.created}
					</div>
				</div>

			</li>
		)
	}
}
export default SingleComment;