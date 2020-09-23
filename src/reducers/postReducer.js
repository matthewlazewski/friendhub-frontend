const postsReducer = (state = { data: [], loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_POSTS':
            return {
            ...state,
            posts: [...state.data],
            loading: true
            }
        case 'ADD_POSTS':
            
            const posts = action.posts.data.map(post => {
                return {
                    id: post.id,
                    body: post.attributes.body,
                    userId: post.relationships.user.data.id,
                    commentIds: post.relationships.comments.data.map(comment => comment.id)
                }
            })
        
            return {
            ...state,
            posts: state.data.concat(posts),
            loading: false
            }
        
        case "ADD_POST":
            console.log(action.post.body)
            debugger
            const {
                id, 
                attributes: {body},
                relationships: {
                    user: {data: {id: userId}}
                }
            } = action.post.body;
            
        const post = {id,body,userId}
        return {...state, data: state.data.concat(post), loading:false}
        default:
            return state;
    }
  }
  
  export default postsReducer;