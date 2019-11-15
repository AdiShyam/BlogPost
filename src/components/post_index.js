import React from 'react';
import { fetchPost } from '../actions';
import { connect } from 'react-redux';
import _ from  'lodash';
import { Link } from 'react-router-dom';


class PostsIndex extends React.Component {

    componentDidMount() {
        this.props.fetchPost();
    }
    _renderPosts() {
        return  _.map(this.props.posts, post => {
            return (
            <li className="list-group-item" key = {post.id} >  {post.title}   </li>) 
        })

    }

    render() {
        console.log("the props is ", this.props.posts);
        return (
            <div>
                <div className="post-button-wrapper">
                    <Link className="button" to = "/posts/new">
                        Add A Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className = "ordered-list-blog">
                    {this._renderPosts()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}

export default connect(mapStateToProps, { fetchPost })(PostsIndex);
