import React, {Component} from 'react';
import SingleComment from './single-comment';
import Axios from 'axios';


class PostComments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: props.comments,
			toPost: {
				articleId: props.id,
				text: 'WOLOLOLOLOl',
				author: props.author,
				authorName: 'WOLOLOLOLOl'
			},
			fetch: props.reFetch,
			postComment: props.doComment
		}
		console.log(this.state.fetch);
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

	onSubmit(){
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
				<form className="post-new-comment">

					<div className="form-group">
						<label htmlFor="author">Author name:</label><br/>
						<input type="text" name="author" className="comment-author-name" id="author"/>
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
