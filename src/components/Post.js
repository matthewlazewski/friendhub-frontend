import React, { Component } from 'react';
import CommentsContainer from '../containers/CommentContainer'
import { Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deletePostRequest } from '../actions/postActions'
import Comment from './Comment'
import LikeButton from './LikeButton';


class Post extends Component {

    handleDelete = () => {
        this.props.deletePostRequest(this.props.post)
    }

    render() {
        const { post, comments, user } = this.props;
        const commentList = comments.filter(comment => comment.postId === post.id)
        const commentListNames = commentList.map(comment => <Comment key={comment.id} comment={comment}/>)
        return (
        <div>
            <Card id="post-card" className="h=100 shadow-sm bg-white rounded">
                <h3>{post.body}<LikeButton post={post} user={user}/></h3><br /> 
                <div id="like-box">
                    <h5 style={{marginLeft: 30, fontSize: 14}}> Author: {post.author}</h5>
                </div>
                { post.author === user.name ?
                    <div><Button onClick={() => this.handleDelete()} >Delete</Button></div> : null
                }
                <br></br>
                <p><b>Comments:</b></p>
                <ul style={{listStyleType: 'none', textAlign: 'left'}}>
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