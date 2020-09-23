const fetchPosts = () => {
  return (dispatch) => {
    fetch('http:localhost:3001/api/v1/posts')
    .then(res => res.json())
    .then(json => dispatch({type: 'ADD_POSTS', posts: json.posts})
    )};
};

// const postPost = (payload) => {
//   const requestObj = {
//     'method': 'POST',
//     'headers': {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     'body': JSON.stringify(payload)
//   };

//   return dispatch => {
//     begin(dispatch);
//     fetch('/api/v1/posts', requestObj)
//     .then(res => res.json())
//     .then(response => {
//       if (response.errors) return console.log(response.errors);
//       dispatch(addPost(response.post.data));
//     });
//   };
// };

// const addPost = (payload) => ({
//   type: "ADD_POST",
//   payload
// });

export {fetchPosts} ;