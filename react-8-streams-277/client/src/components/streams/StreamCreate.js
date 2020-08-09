import React from 'react';
import { Field, reduxForm, getFormMeta } from 'redux-form';

class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    //take input properties(destructuring)
    renderInputField = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        return (
            //handle submit, the function we should call when a form gets submitted
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInputField} label="Enter Title" />
                <Field name="description" component={this.renderInputField} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

//Every single time user interacts with the form, validate function gets call
const validate = (formValues) => {
    const errors = {};
    // the name of the error, MUST be the same of the name in the input

    if (!formValues.title) {
        errors.title = 'Enter a title';
    }
    if (!formValues.description) {
        errors.description = 'Enter a description';
    }

    return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);