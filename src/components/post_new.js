import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import TinyMCE from 'react-tinymce';

import {createPost} from '../actions';

class PostNew extends Component {

    renderField(field){
        return (
          <div className="form-grouping">
              <label> {field.label} </label>
              <input
                  type="text"
                  {...field.input}
              />

              <p className="error-block">{field.meta.error}</p>
          </div>
        );
    };

    renderRadioBtn(field){
        let radioButtonValue = 'active';
        return (
            <div className="form-grouping">
                <label> {field.label}
                <input
                    type="radio"
                    value={radioButtonValue}
                    {...field.input}
                />
                </label>
                <p className="error-block">{field.meta.touched ? field.meta.error : ''}</p>
            </div>
        );
    }

    renderPostRedactor(field){

        let props = Object.assign({}, field);
        delete props.input;
        delete props.meta;

        return(
            <div className="form-grouping">
                <label> {field.label} </label>
                <TinyMCE
                    {...props}
                    content={field.input.content !== '' ? field.input.content : null}
                    config={{
                        plugins: 'autolink link image lists print preview',
                        toolbar: 'styleselect | undo redo | bold italic | alignleft aligncenter alignright'
                    }}
                    onBlur={(event, value) => { field.input.onChange(event.target.getContent()) }}
                />
                <p className="error-block">{field.meta.touched ? field.meta.error : ''}</p>
            </div>
        );
    }

    onSubmit(values){
        this.props.createPost(values,
            () => this.props.history.push('/')
        );
    }

    render() {
        const { handleSubmit } = this.props;

        return (

                <div className="row">
                    <div className="col-xs-12">
                        <form
                            className="post-new-form"
                            onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <Field
                                label="Title"
                                name="title"
                                component={this.renderField}
                            />

                            <div>
                                <label className="random-header"> Is active? Please, be shure radio-button is cheked out</label>
                                <div>
                                    <label><Field name="status" component="input" type="radio" value="active"/> Active </label>
                                </div>
                            </div>
                            <Field
                                label="Meta Title"
                                name="metaTitle"
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


        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title){
        errors.title = 'Enter a post title'
    }
    if (!values.metaTitle){
        errors.metaTitle = 'Enter meta title'
    }
    if (!values.metaDescription){
        errors.metaDescription = 'Enter description'
    }
    if (!values.metaKeywords) {
        errors.metaKeywords = 'Enter keywords'
    }
    if (!values.status){
        errors.status = 'Must be "Active'
    }
    if (!values.body){
        errors.body = 'Fill post body'
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostNew)
);