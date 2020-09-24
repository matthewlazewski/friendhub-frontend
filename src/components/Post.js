import React, { Component } from 'react';
import CommentsContainer from '../containers/CommentContainer'
import { Card } from 'react-bootstrap'

class Post extends Component {

  render() {
    const { post } = this.props;
    return (
      <div>
        <Card>
        <li>
          <h3>{post.body}</h3>
          <p>Comments:</p>
          <CommentsContainer post={post}/>
        </li>
        </Card>
        <br></br>
      </div>
    );
  }
};

export default Post;