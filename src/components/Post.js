import React, { Component } from 'react';
import CommentsContainer from '../containers/CommentContainer'

class Post extends Component {

  render() {
    const { post } = this.props;
    return (
      <div>
        <li>
          {post.body}
          <CommentsContainer post={post}/>
        </li>
      </div>
    );
  }
};

export default Post;