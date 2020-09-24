import React from 'react'


class Comment extends React.Component {

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