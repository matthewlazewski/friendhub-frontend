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
                    user: {data: {id: userId}},
                    // comments: {data: {id: commentId}}
                }
            } = action.post;
            
        const post = {id,body,userId}
        return {...state, data: state.data.concat(post), loading:false}

        case 'DELETE_POST':
            const filterPosts = state.posts.filter(post => post.id !== action.id);
            return {...state, filterPosts}

        case "PATCH_COMMENT":
            const editPost = action.post
            const patchObj = {
                id: editPost.id,
                content: editPost.attributes.content,
                userId: editPost.relationships.user.data.id,
            };
            const editPosts = state.data.map( c =>  c.id !== patchObj.id ? c : patchObj);
        
            return {...state, data: editPosts, pending: false, id: 0};

        default:
            return state;
    }
  }
  
  export default postsReducer;