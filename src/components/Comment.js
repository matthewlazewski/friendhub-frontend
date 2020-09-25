import React from 'react'
import { connect } from 'react-redux'


class Comment extends React.Component {

    render() {
      const { users, comment } = this.props;

      const author = (id) => {
        return users.map(user => {
            if(user.commentIds.includes(comment.id)){
                return user.name
            } else {
                return null
            }
        });
    }
      return (
        <div>
          <li>
            {comment.content} - {author(comment.id)}
          </li>
          <br></br>
        </div>
      );
    }
  };

  const mapStateToProps = state => { 
    return ({
        users: state.userReducer.users
    })
  }
  
  export default connect(mapStateToProps)(Comment);