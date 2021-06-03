export default function fetchPosts() {
    return (dispatch) => {
      fetch("http://localhost:3001/posts")
      .then(function(response) {
        return response.json()
      })
      // .then(console.log((postArray) => {"POST ARRAY", postArray}))
      .then((postsArray) => {dispatch({type: "FETCH_POSTS", payload: postsArray})
      })
    }
  }