import React from 'react';
import { Link } from 'react-router-dom';
import RANT from '../RANT.PNG'


const PostCard = ({ post, deletePost }) => 
    {console.log(deletePost)

        if(post) {
        return(
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

                    <ul>
                        <li key={post.id}><Link to={`/posts/${post.id}`}>See this Rant</Link></li>
                    </ul>
            
                </div>
            </div>
            )   
        }else {
            return null
        }
    }
    

export default PostCard;