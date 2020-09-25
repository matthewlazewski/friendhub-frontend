import React, { Component } from 'react';
import CommentsContainer from '../containers/CommentContainer'
import { Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import Comment from './Comment'


class Post extends Component {

  render() {
    const { post,comments, users, user} = this.props;
    const commentList = comments.filter(comment => comment.postId === post.id)
    const commentListNames = commentList.map(comment => <Comment key={comment.id} comment={comment}/>)
    
    const author = (id) => {
        return users.map(user => {
            if(user.postIds.includes(post.id)){
                return user.name
            } else {
                return null
            }
        });
    }

    const postAuthor = author(post.id)
    return (
      <div>
        <Card className="h=100 shadow-sm bg-white rounded">
          <h3>{post.body} - {author(post.id)}</h3>
          { postAuthor[0] === user.name ?
              <div><Button>Edit</Button> <Button>Delete</Button></div> : null
          }
          <p>Comments:</p>
          <ul>
              {commentListNames}
          </ul>
          <CommentsContainer post={post}/>
        </Card>
        <br></br>
      </div>
    );
  }
};

const mapStateToProps = state => {
    return({
        user: state.userReducer.user,
        users: state.userReducer.users,
        comments: state.commentReducer.comments
    })
}

export default connect(mapStateToProps)(Post);