export const addPost = post => {
    return {
      type: 'ADD_POST',
      post: Object.assign({}, post)
    }
  }
  
export const deletePost = postId => {
    return {
      type: 'DELETE_POST',
      postId
    }
}
