
const fetchPosts = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/posts')
    .then(res => res.json())
    .then(json => dispatch({type: 'ADD_POSTS', posts: json.data})
    )}
};

const addPost = post => {
  const requestObj = {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    'body': JSON.stringify(post)
  };
  
  return (dispatch) =>{
    fetch(`http://localhost:3001/api/v1/posts`, requestObj)
    .then(res => res.json())
    .then(response => {
      dispatch({type: "ADD_POST", post: response.post.data})
    })};
}


const deletePostRequest = post => {
  const requestObj = {
    'method': 'DELETE',
    'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    'body': JSON.stringify(post.id)
  };

  return (dispatch) =>{
    fetch(`http://localhost:3001/api/v1/posts/${post.id}`, requestObj)
    .then(res => res.json())
    .then(response => {
      dispatch({type: "DELETE_POST", post: post})
    })};
}


export { fetchPosts, deletePostRequest, addPost };