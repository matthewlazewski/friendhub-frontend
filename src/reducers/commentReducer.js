
  
  const commentsReducer = (state = {comments: [], loading: false}, action) => {
  
    switch(action.type) {

  
      case "ADD_COMMENTS":
        const comments = action.comments.data.map(comment => {
          return {
            id: comment.id,
            content: comment.attributes.content,
            userId: comment.relationships.user.data.id,
            postId: comment.relationships.post.data.id 
          };
        });
  
        return {...state, data: state.data.concat(comments), pending: false};
  
      case "ADD_COMMENT":
        
        console.log(action.comment)
        debugger
            const {
                id, 
                attributes: {content},
                relationships: {
                    user: {data: {id: userId}},
                    post: {data: {id: postId}}
    
                }
            } = action.comment;
            
        const comment = {id,content,userId,postId}
        return {...state, posts: state.comments.concat(comment), loading:false}
  
      // case "DELETE_COMMENT":
      //   const toDelete = action.payload.comment_id;
      //   comments = state.data.filter( ({id}) => id !== toDelete );
  
      //   return {...state, comments: comments, pending: false};
  
      // case "PATCH_COMMENT":
      //   comment = action.payload.data
      //   const patchObj = {
      //     id: comment.id,
      //     content: comment.attributes.content,
      //     userId: comment.relationships.user.data.id,
      //   };
      //   comments = state.data.map( c =>  c.id !== patchObj.id ? c : patchObj);
  
      //   return {...state, data: comments, pending: false, id: 0};
  
      default:
        return state;
    };
  }
  
  export default commentsReducer;