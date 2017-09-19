import React, {Component} from 'react';
import Moment from 'moment';
class SingleComment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: props.comment
		}
	}

	renderReplies() {
		if (this.state.comment.replies.lenght !== 0) {
			return (
				this.state.comment.replies.map(
					(replie) => {
						return (
							<li key={replie._id} className="single-reply">
								<div className="body-comment">
									<span className="authName">
										{replie.author}
									</span>
									<p className="post-body">
										{replie.text}
									</p>
									<div className="comment-date">
										{replie.created}
									</div>
								</div>

							</li>
						);
					}
				)
			)
		}
	}

	render() {
		return (
			<li className="single-comment">
				<div className="body-comment">
					<span className="authName">
						{this.state.comment.author}
					</span>
					<p className="post-body">
						{this.state.comment.text}
					</p>
					<div className="comment-date">
						{this.state.comment.created}
					</div>
				</div>

				<ul className="replies">
					{this.renderReplies()}
				</ul>
			</li>
		)
	}
}
export default SingleComment;