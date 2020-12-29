const likesReducer = (state = {likes: [], loading: false}, action) => {
  
    switch(action.type) {

      case "ADD_LIKES":
        
        let likes = action.likes.map(like => {
          return {
            id: like.id,
            userId: like.relationships.user.data.id,
            postId: like.relationships.post.data.id,
          };
        });
        return {...state, likes: state.likes.concat(likes), pending: false};
  
      case "ADD_LIKE":
        
        console.log(action.like)
            const {
                id,
                relationships: {
                    user: {data: {id: userId}},
                    post: {data: {id: postId}}
    
                }
            } = action.comment;
            
        let like = {id,userId,postId}
        return {...state, likes: state.likes.concat(like), loading:false}

      default:
        return state;
    };
}

export default likesReducer