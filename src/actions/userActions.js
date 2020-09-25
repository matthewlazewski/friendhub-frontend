
export const addUser = ({user}) => {
    return {
        type: 'ADD_USER',
        user: user
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/users')
        .then(res => res.json())
        .then(json => dispatch({type: 'ADD_USERS', users: json.users.data})
        )}
};

export const addUsers = ({data}) => ({
    type: "ADD_USERS",
    users: data,
});