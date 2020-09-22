const postsReducer = (state = { data: [], loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_POSTS':
            return {
            ...state,
            posts: [...state.data],
            loading: true
            }
        case 'ADD_POSTS':
            
            const allPosts = action.posts.data.map(post => {
                return {
                    id: post.id,
                    body: post.attributes.body,
                    userId: post.relationships.user.posts.id,
                    commentIds: post.relationships.comments.data.map(comment => comment.id)
                }
            })
        
            return {
            ...state,
            posts: state.data.concat(allPosts),
            loading: false
            }
        
        case "ADD_POST":
            // const {
            //     id, 
            //     attributes: {body},
            //     relationships: {
            //         user: {data: {id: userId}}
            //     }
            // } = action.payload;
            
        // const post = {id,body,userId}
        return {...state, loading:false}
        default:
            return state;
    }
  }
  
  export default postsReducer;