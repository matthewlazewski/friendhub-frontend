const begin = func => func({type: "BEGIN_POST_REQUEST"});

const fetchPost = () => {
  return (dispatch) => {
    begin(dispatch);
    fetch('/api/v1/poasts')
    .then(res => res.json())
    .then(json => dispatch(addPosts(json)));
  };
};

const addPost = postsJSON => ({
  type: "ADD_POST",
  posts: postsJSON
});

const postPost = (payload) => {
  const requestObj = {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    'body': JSON.stringify(payload)
  };
  return dispatch => {
    begin(dispatch);
    fetch('/api/v1/posts', requestObj)
    .then(res => res.json())
    .then(response => {
      if (response.errors) return console.log(response.errors);
      dispatch(addPost(response.post.data));
    });
  };
};

const addPost = (payload) => ({
  type: "ADD_POST",
  payload
});

export {fetchPost, postThread};