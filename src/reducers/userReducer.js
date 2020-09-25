export default function userReducer(state = {
    user: {}, users: []
  }, action){
    switch (action.type) {
      case 'ADD_USER':
        console.log('adding ', action.user);
        const {
          id,
          attributes:{ 
            name,email
          },
          relationships: {
            posts: {
              data: posts
            },
            comments: {
              data: comments
            }
          }
        } = action.user

        const currentUser = {
          id: id,
          name: name,
          email: email,
          postIds: posts.map(post => post.id),
          commentIds: comments.map(comment => comment.id)
        }
        
        return {...state, user: currentUser }
      
      case 'ADD_USERS':
        const users = action.users.map(user => {
            return {
              id: user.id,
              name: user.attributes.name,
              email: user.attributes.email,
              postIds: user.relationships.posts.data.map(post => post.id),
              commentIds: user.relationships.comments.data.map(comment => comment.id)
            }
        })
    
        return {
        ...state,
        users: state.users.concat(users)
        }
      default:
        return state;
    }
};