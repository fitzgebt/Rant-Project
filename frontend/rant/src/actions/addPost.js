export default function addPost(post) {
    console.log("3 top of addList")//3
    return function(dispatch) {
      console.log("5/4 top of thunk in addlist") //4
      fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({post: post})
      }).then(r => r.json())
      .then(post => dispatch({type: "ADD_POST", payload: post}))
        console.log("7/6 bottom of thunk in addlist") //5
    }
  
  }