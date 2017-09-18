import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';


class PostComments extends Component{

    onSubmit(){}
    renderField(){}

    render(){
        return(
            <section className="comments-section">
                {/*<form*/}
                    {/*className="post-new-form"*/}
                    {/*onSubmit={(this.onSubmit.bind(this))}>*/}
                {/*<Field*/}
                    {/*label="Title"*/}
                    {/*name="title"*/}
                    {/*component={this.renderField}*/}
                {/*/>*/}
                <button className="submit-comment" type="submit">
                    Submit Comment
                </button>
                {/*</form>*/}
            </section>
        )
    }
}

export default PostComments;
