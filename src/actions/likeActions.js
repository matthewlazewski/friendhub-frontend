const fetchLikes = () => {
    return (dispatch) => {
      fetch('http://localhost:3001/api/v1/likes')
      .then(res => res.json())
      .then(json => dispatch({type: 'ADD_LIKES', likes: json.data})
      )}
  };
  
const addLike = like => {
  const requestObj = {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      'body': JSON.stringify(like)
    };
    
    return (dispatch) =>{
      fetch(`http://localhost:3001/api/v1/likes`, requestObj)
        .then(res => res.json())
        .then(response => {
          dispatch({type: "ADD_LIKE", like: response.like.data})
          console.log(response)
      });
    }
}

export { fetchLikes, addLike };