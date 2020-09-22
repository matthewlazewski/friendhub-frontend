export default function manageUsers(state = {
    user: {},
  }, action){
    switch (action.type) {
      case 'ADD_USER':
        console.log('adding ', action.user);
        return {
          ...state,
          user: { ...action.user }
        }
      default:
        return state;
    }
};