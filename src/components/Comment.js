import React from 'react'
import commentsReducer from '../reducers/commentReducer';

class Comment extends Component {

    render() {
      const { comment } = this.props;
      return (
        <div>
          <li>
            {comment.content}
          </li>
          <br></br>
        </div>
      );
    }
  };
  
  export default Comment;