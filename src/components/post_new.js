import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'

import TinyMCE from 'react-tinymce';



class PostNew extends Component {

    handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    }

    renderField(field){
        return (
          <div className="form-grouping">
              <label> {field.label} </label>
              <input
                  type="text"
                  {...field.input}
              />

              {field.meta.error}
          </div>
        );
    }

    renderPostRedactor(field){
        return(
            <div className="form-grouping">
                <label> {field.label} </label>
                <TinyMCE
                    content={'..'}
                    config={{
                        plugins: 'autolink link image lists print preview',
                        toolbar: 'styleselect | undo redo | bold italic | alignleft aligncenter alignright'
                    }}
                    onChange={this.handleEditorChange}
                    {...field.textarea}
                />

            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <form
                            className="post-new-form"
                            onSubmit={}>
                            <Field
                                label="Title"
                                name="title"
                                component={this.renderField}
                            />
                            <Field
                                label="Description"
                                name="metaDescription"
                                component={this.renderField}
                            />
                            <Field
                                label="Keywords"
                                name="metaKeywords"
                                component={this.renderField}
                            />

                            <Field
                              label="Post Body"
                              name="body"
                              component={this.renderPostRedactor}
                            />

                            <button
                                className="nav-link"
                                type="submit">
                                Post Article!
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title){
        errors.title = 'Enter a post title'
    }
    if (!values.metaDescription){
        errors.metaDescription = 'Enter description'
    }
    if (!values.metaKeywords) {
        errors.metaKeywords = 'Enter keywords'
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostNew);