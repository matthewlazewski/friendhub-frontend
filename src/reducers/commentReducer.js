
  
  const commentsReducer = (state = {comments: [], loading: false}, action) => {
  
    switch(action.type) {

  
      case "ADD_COMMENTS":
        
        let comments = action.comments.map(comment => {
          return {
            id: comment.id,
            content: comment.attributes.content,
            userId: comment.relationships.user.data.id,
            postId: comment.relationships.post.data.id,
            author: comment.attributes.author
          };
        });
        return {...state, comments: state.comments.concat(comments), pending: false};
  
      case "ADD_COMMENT":
        
        console.log(action.comment)
            const {
                id, 
                attributes: {content, author},
                relationships: {
                    user: {data: {id: userId}},
                    post: {data: {id: postId}}
    
                }
            } = action.comment;
            
        let comment = {id,content,userId,postId, author}
        return {...state, comments: state.comments.concat(comment), loading:false}
  
      case "DELETE_COMMENT":
        const allcomments = state.comments.filter( ({id}) => id !== action.comment.id );
  
        return {...state, comments: allcomments, pending: false};
  
      default:
        return state;
    };
  }
  
  export default commentsReducer;