import React, { Component } from 'react';
import CommentsContainer from '../containers/CommentContainer'
import { Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deletePostRequest } from '../actions/postActions'
import Comment from './Comment'


class Post extends Component {

    handleDelete = () => {
        this.props.deletePostRequest(this.props.comment)
    }

    render() {
        const { post,comments, user} = this.props;
        const commentList = comments.filter(comment => comment.postId === post.id)
        const commentListNames = commentList.map(comment => <Comment key={comment.id} comment={comment}/>)
        return (
        <div>
            <Card className="h=100 shadow-sm bg-white rounded">
            <h3>{post.body} - {post.author}</h3>
            { post.author === user.name ?
                <div><Button>Delete</Button></div> : null
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

export default connect(mapStateToProps, {deletePostRequest})(Post);