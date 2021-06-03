import React from 'react';
import { Link } from 'react-router-dom';
import RANT from '../RANT.PNG'


const PostCard = ({ post, deletePost }) => 
    <div class="card" className="card" style={{width: 18 + "rem"}}>
        <img 
            src={RANT} 
            alt="logo"
            height="100"
            width="100"
            />
        <div class="card-body">
        <p>{post.text}</p>
        <p>{post.author}</p>
        <button
            type="button"
            onClick={() => deletePost(post.id)}
            className="btn btn-secondary"
            >
                Delete Post
            </button>

                {/* <button 
                    type="button"
                    className="btn btn-primary"
                    key={post.id}
                    onClick={showPost(post.id)}
                    >
                    See this Rant!
                </button> */}
            <ul>
                <li key={post.id}><Link to={`/posts/${post.id}`}>See this Rant</Link></li>
            </ul>
        {/* <button
            type="button"
            onClick={showPost(post.id)}
            className="btn btn-primary"
            >
            See this Rant
        </button> */}
        </div>
    </div>

export default PostCard;