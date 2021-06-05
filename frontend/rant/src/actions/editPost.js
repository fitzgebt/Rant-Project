export default function editPost(post) {

    return function(dispatch) {

      fetch(`http://localhost:3001/posts/${post.id}`, {
        method: "PATCH",
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({post: post})
      }).then(r => r.json())
      .then(post => dispatch({type: "EDIT_POST", payload: post}))
    }
  
  }