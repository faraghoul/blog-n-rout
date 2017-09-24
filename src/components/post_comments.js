import React, {Component} from 'react';
import SingleComment from './single-comment';
import Axios from 'axios';
import {API_URL} from '../actions'


class PostComments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: props.comments,
			textToSend: '',
			authorNameToFill: '',
            articleID: props.id,
			authorId: props.author
		}
		console.log(this.state.fetch);
		this.onAuthorChange = this.onAuthorChange.bind(this);
        this.onCommentTextChange = this.onCommentTextChange.bind(this);
        this.omCommentSubmit = this.onCommentSubmit.bind(this);
        console.log('Comments array: ', this.state.comments);
	}

	renderComments() {
		if (this.state.comments.length !== 0) {
			return this.state.comments.map(
				(comment) => {
					return (
						<SingleComment key={comment._id} comment={comment} />
					)
				})
		} else {
			return <div>There are no comments yet!</div>
		}
	}

    onAuthorChange(event){
        this.setState(
        	{authorNameToFill:  event.target.value}
        	);
        console.log(this.state.authorNameToFill);
    }

    onCommentTextChange(event){
    	this.setState(
			{textToSend: event.target.value}
		);
    	console.log(this.state.textToSend);
	}

	onCommentSubmit(event){
    	event.preventDefault();
		let toSubmt = {
            articleId: this.state.articleID,
            text: this.state.textToSend,
			author: this.state.authorId,
            authorName: this.state.authorNameToFill
		};
		console.log(toSubmt);
        Axios.post(`${API_URL}comment/`, toSubmt)
			.then(
				(response) => {
					this.setState({
						comments: [...this.state.comments, response.data]
					})
				}
			);
	}


	render() {
		return (
			<section className="comments-section">
				<h2 className="comment-header">
					Comments:
				</h2>
				<ul className="comments">
					{this.renderComments()}
				</ul>
				<h2 className="comment-header">
					New comment:
				</h2>
				<form className="post-new-comment" onSubmit={this.omCommentSubmit}>

					<div className="form-group">
						<label htmlFor="author">Author name:</label><br/>
						<input
							type="text"
							name="author"
							className="comment-author-name"
							id="author"
							value={this.state.authorNameToFill}
							onChange={this.onAuthorChange}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="commentText">Comment text:</label><br/>
						<textarea
							cols="45"
							rows="8"
							name="text"
							className="comment-text"
							id="commentText"
							defaultValue="Enter your comment..."
							value={this.state.textToSend}
							onChange={this.onCommentTextChange}
						/>
					</div>

					<button className="submit-comment" type="submit">
						Submit Comment
					</button>
				</form>
			</section>
		)
	}

}
export default PostComments;
