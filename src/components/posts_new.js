import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions/index'
import { Link } from 'react-router-dom';

class PostsNew extends React.Component {

    constructor(props) {
        super(props);
    }

    renderField = (field) => {
        return (
            <div>
                <label>{field.label}</label>
                <br />
                <input
                    type="text"
                    // onChange = {...field.input.onChange}
                    // onBlur = {...field.input.onBlur} 
                    // onFocus = {...field.input.onFocus}
                    {...field.input}
                />
                {field.meta.touched ? field.meta.error: ''}
            </div>
        )
    }

    onSubmit = (values) => {
        console.log("the values are ", values);
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (<div>
            <h2>
                New Posts
            </h2>
            <form onSubmit = {handleSubmit(this.onSubmit)}>
                <Field 
                    label = 'Title' 
                    name = 'title'
                    component={this.renderField} 
                />
                <Field 
                    label = "Categories" 
                    name = 'categories' 
                    component = {this.renderField} 
                />
                <Field 
                    label = "Post Content" 
                    name = 'content' 
                    component = {this.renderField} 
                />
                <button className= "submit-button" >submit</button>
                <Link to= '/' className ="cancel-button"> cancel</Link>
            </form>
        </div>)
    }
}

const validate = (values) => {
    // console.log(values) => {title: 'dfd', Categories: "dsfdsfasdf", content:"some content"}
    const error = {};

    if (!values.title || values.title.length < 3) { 
        error.title = 'Enter the title with atleast 3 charactors'
    }

    if (!values.content) { 
        error.content = " Enter the content"
    }

    if (!values.categories) { 
        error.categories = " Enter the categories"
    }
    // if error is empty then the validation is successfull, else form is invalid
    return error;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);


// export default connect(reducForm)(PostsNew);