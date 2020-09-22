export default function manageUsers(state = {
    user: {},
  }, action){
    switch (action.type) {
      case 'ADD_USER':
        console.log('adding ', action.user);
    
        // const {
        //   id,
        //   attributes: {
        //     name
        //   },
        //   relationships: {
        //     comments: {
        //     data: comments
        //     }
        //   }
        // } = action.user

        // const currentUser = {
        //   id: id,
        //   name: name,
        //   commentIds: comments.map(comment => comment.id)
        // }
        return {
          ...state,
          user: { ...action.user }
        }
        
      
      default:
        return state;
    }
};