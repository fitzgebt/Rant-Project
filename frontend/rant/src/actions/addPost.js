export default function addPost(post) {

  return function(dispatch) {

    fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({post: post})
      }).then(r => r.json())
      .then(post => dispatch({type: "ADD_POST", payload: post}))
    }
  
  }