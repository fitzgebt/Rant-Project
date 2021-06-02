export default (state = [], action) => {

    let index;
    let post;

    switch (action.type) {
        
        case 'ADD_POST':
            return state.concat(action.post);

        case 'DELETE_POST':
            return state.filter(post => post.id !== action.postId)

        case 'FETCH_POSTS':
            return {posts: action.payload} 
        
        default: 
            return state;
    }
}