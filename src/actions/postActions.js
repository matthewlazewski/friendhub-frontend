export const fetchPosts = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_POSTS'})
      fetch('https://localhost:3001/api/v1/posts').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_POSTS', posts: responseJSON.images })
      })
    }
  }