import React from 'react';
// debugger
const PostCard = ({ post, deletePost }) => 

    <div>
        <p>{post.text}</p>
        <p>{post.author}</p>
    </div>

export default PostCard;