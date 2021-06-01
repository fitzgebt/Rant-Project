export default (state = [], action) => {

    let index;
    let post;

    switch (action.type) {
        
        case 'ADD_POST':
            return state.concat(action.post);
        
        default: 
            return state;
    }
}