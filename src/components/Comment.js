import React from 'react'
import { connect } from 'react-redux'


class Comment extends React.Component {

    render() {
      const { users, comment, user } = this.props;

      const author = (id) => {
        return users.map(user => {
            if(user.commentIds.includes(comment.id)){
                return user.name
            } else {
                return null
            }
        });
    }

        const commentAuthor = author(comment.id)
      return (
        <div>
          <li>
            {comment.content} - {author(comment.id)}
            { commentAuthor[0] === user.name ?
              <div><Button>Edit</Button> <Button>Delete</Button></div> : null
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
  
  export default connect(mapStateToProps)(Comment);