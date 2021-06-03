export default function deletePost(postId) {

    return function(dispatch) {
  
      fetch(`http://localhost:3001/posts/${postId}`, {
        method: "DELETE",
        headers: {Accept: "application/json", "Content-Type": "application/json"},
      }).then(r => r.json())
      .then(post => dispatch({type: "DELETE_POST", payload: post.id}))
    }

  
  }