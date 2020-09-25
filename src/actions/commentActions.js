const fetchComments = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/comments')
    .then(res => res.json())
    .then(json => dispatch({type: 'ADD_COMMENTS', comments: json.data})
    )}
};
  
  
const deleteCommentRequest = comment => {
    const requestObj = {
      'method': 'DELETE',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      'body': JSON.stringify(comment.id)
    };
  
    return (dispatch) =>{
      fetch(`http://localhost:3001/api/v1/comments/${comment.id}`, requestObj)
      .then(res => res.json())
      .then(response => {
        dispatch({type: "DELETE_COMMENT", comment: comment})
      })};
}

  
export {
    fetchComments,
    deleteCommentRequest,
};