
export const addUser = ({user}) => {
    return {
        type: 'ADD_USER',
        user: user
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
      fetch('/api/v1/users')
      .then(res => res.json())
      .then(json => dispatch(addUsers(json)));
    };
};

const addUsers = ({data}) => ({
    type: "ADD_USERS",
    users: data,
});