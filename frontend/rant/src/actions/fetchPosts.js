export default function fetchPosts() {
    return (dispatch) => {
      fetch("http://localhost:3001/posts")
      .then(function(response) {
        return response.json()
      })
      // .then(data => console.log("testData", data))
      .then((postsArray) => {
        debugger
        dispatch({type: "FETCH_POSTS", payload: postsArray})
      })
    }
  }