export default (state = {posts: []}, action) => {

    let index;
    let post;

    switch (action.type) {
        
        case 'ADD_POST':
            return {posts: [...state.posts, action.payload]};
        
        // case 'ADD_POST':
        //     return {posts: [...state.posts, action.payload]};

        case 'DELETE_POST':
            return state.filter(post => post.id !== action.postId)

        case 'FETCH_POSTS':
            console.log("fetchPosts", action.payload)
            return {posts: action.payload} 
        
        default: 
            return state;
    }
}