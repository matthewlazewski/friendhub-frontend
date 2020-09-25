const fetchPosts = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/posts')
    .then(res => res.json())
    .then(json => dispatch({type: 'ADD_POSTS', posts: json.data})
    )}
};


export {fetchPosts};