import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { deleteCommentRequest } from '../actions/commentActions'


class Comment extends React.Component {

    handleDelete = () => {
        this.props.deleteCommentRequest(this.props.comment)
    }

    render() {
      const { comment, user } = this.props;

      return (
        <div>
          <li>
            {comment.content} - {comment.author}
            { comment.author === user.name ?
              <div><Button onClick={() => this.handleDelete()} >Delete</Button></div> : null
          }
          </li>
          <br></br>
        </div>
      );
    }
  };

  const mapStateToProps = state => { 
    return ({
        users: state.userReducer.users,
        user: state.userReducer.user
    })
  }
  
  export default connect(mapStateToProps, { deleteCommentRequest })(Comment);