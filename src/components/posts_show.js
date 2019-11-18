import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom';
import { deletePost } from '../actions';

class PostsShow extends React.Component {
    
    componentDidMount() {
        const { id } = this.props.match.params;
        console.log("the propssss are ",this.props.match.params.id);
        this.props.fetchPost(id);
    }

    _deletePost = () => {
        const {id } = this.props.post;
        console.log("the id is ", id)
        this.props.deletePost(id, (() => {
            this.props.history.push('/');
        }))

    }

    render() {
        // posts[this.props.match.params.id];
        console.log("the props are ", this.props.post);
        if (!this.props.post) {
            return (<div> Loading Content ....</div>)
        } else {

            return (
                <div>
                    <header className= "header">
                        <Link to = '/' className = "button" >Back to Index</Link>
                        <button className='cancel-button' onClick={this._deletePost}> Delete Post</button>
                    </header>
                    <h1>
                        {this.props.post.title}
                    </h1>
                    <h6>{this.props.post.categories}</h6>
                    <p>{this.props.post.content}</p>
                </div>
            )
        }
    }
}

const mapStateToProps = ({ posts }, ownPros) => {
    return { post: posts[ownPros.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);