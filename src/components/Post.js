import React, { Component } from 'react';
import CommentsContainer from '../containers/CommentContainer'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'

class Post extends Component {

  render() {
    const { post,comments } = this.props;
    const commentList = comments.filter(comment => comment.postId === post.id)
    const commentListNames = commentList.map(comment => <li>{comment.content}</li>)
    return (
      <div>
        <Card>
        <li>
          <h3>{post.body}</h3>
          <p>Comments:</p>
          <ul>
              <li>{commentListNames}</li>
          </ul>
          <CommentsContainer post={post}/>
        </li>
        </Card>
        <br></br>
      </div>
    );
  }
};

const mapStateToProps = state => {
    return({
        comments: state.commentReducer.comments
    })
}

export default connect(mapStateToProps)(Post);