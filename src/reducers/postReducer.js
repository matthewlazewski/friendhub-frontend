const postsReducer = (state = { posts: [], loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_POSTS':
            return {
            ...state,
            posts: [...state.posts],
            loading: true
            }
        case 'ADD_POSTS':
            const posts = action.posts.map(post => {
                return {
                    id: post.id,
                    body: post.attributes.body,
                    userId: post.relationships.user.data.id,
                    author: post.attributes.author,
                    commentIds: post.relationships.comments.data.map(comment => comment.id)
                }
            })
        
            return {
            ...state,
            posts: state.posts.concat(posts),
            loading: false
            }
        
        case "ADD_POST":
            console.log(action.post)
        
            const {
                id, 
                attributes: {body, author},
                relationships: {
                    user: {data: {id: userId}},
                    comments: {data: {id: commentId}}
                }
            } = action.post;
            
        const post = {id,body,userId, commentId, author}
        return {...state, posts: state.posts.concat(post), loading:false}

        case 'DELETE_POST':
            const filterPosts = state.posts.filter(post => post.id !== action.post.id);
            return {...state, filterPosts}

        default:
            return state;
    }
  }
  
  export default postsReducer;