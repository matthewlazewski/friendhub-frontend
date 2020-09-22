export default function userReducer(state = {
    user: {},
  }, action){
    switch (action.type) {
      case 'ADD_USER':
        console.log('adding ', action.user);
        const {
          id,
          name,
          email,
          // relationships: {
          //   posts: {
          //     data: posts
          //   },
          //   comments: {
          //     data: comments
          //   }
          // }
        } = action.user

        const currentUser = {
          id: id,
          name: name,
          email: email,
          // postIds: posts.map(post => post.id),
          // commentIds: comments.map(comment => comment.id)
        }
        return {
          ...state,
          user: { ...action.user}, currentUser: currentUser
        }
        
      
      default:
        return state;
    }
};