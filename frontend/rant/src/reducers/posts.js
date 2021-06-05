export default function postsReducer(state = {posts: []}, action) {


    switch (action.type) {
        
        case 'ADD_POST':
            return {posts: [...state.posts, action.payload]};

        case 'DELETE_POST':
            return {posts: state.posts.filter(post => post.id !== action.payload)}

        case 'FETCH_POSTS':
            return {posts: action.payload} 
        
        default: 
            return state;
    }
}