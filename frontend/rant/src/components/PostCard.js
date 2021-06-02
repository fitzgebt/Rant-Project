import React from 'react';
import deletePost from '../actions/deletePost';


const PostCard = ({ post  }) => 

    <div>
        <p>{post.text}</p>
        <p>{post.author}</p>
        <button
            type="button"
            onClick={deletePost(post.id)}
            className="btn btn-secondary"
            >
                Delete Post
            </button>
    </div>

export default PostCard;