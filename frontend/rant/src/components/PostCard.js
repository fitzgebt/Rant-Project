import React from 'react';


const PostCard = ({ post, deletePost }) => 

    <div>
        <p>{post.text}</p>
        <p>{post.author}</p>
        <button
            type="button"
            onClick={() => deletePost(post.id)}
            className="btn btn-secondary"
            >
                Delete Post
            </button>
    </div>

export default PostCard;