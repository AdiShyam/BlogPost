import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-dom';

class PostsNew extends React.Component {

    constructor(props) {
        super(props);
    }

    // renderTagsField = field => {
    //     return( 
    //         <div>
    //             <input
    //                 type= "text"
    //                 {...field.input}
    //             /> 
    //         </div>
    //     )
    // }
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
            </div>
        )
    }

    render() {
        return (<div>
            New Posts
            <form >
                <Field 
                    label = 'Title' 
                    name = 'title'
                    component={this.renderField} 
                />
                <Field 
                    label = "Tags" 
                    name = 'tags' 
                    component={this.renderField} 
                />
                <Field 
                    label = "Post Content" 
                    name = 'content' 
                    component={this.renderField} 
                />
            </form>
        </div>)
    }
}

export default reduxForm({
    form: 'postsNewForm'
})(PostsNew);
