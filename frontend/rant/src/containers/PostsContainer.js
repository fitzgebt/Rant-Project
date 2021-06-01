import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../components/PostCard';
import { deletePost } from '../actions/posts';


class Posts extends Component {

    render() {
        const { posts, deletePost } = this.props
        return (
            <div>
                <hr />
                <div className="row justify-content-center">
                    <h2>Posts</h2>
                </div>
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        {posts.map(post => <PostCard key={post.id} post={post} deletePost={deletePost} />)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
      posts: state.posts
    })
  }
  
  export default connect(mapStateToProps, { deletePost })(Posts);