import React from 'react';
import { connect } from 'react-redux';
import Comments from '../components/Comments'
import CommentForm from '../components/CommentForm'

class CommentContainer extends React.Component {
    render(){
        return (
            <div className="App">
                <Comments comments={this.props.comments} />
                <CommentForm  post={this.props.post} user={this.props.user} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        comments: state.commentReducer.comments,
        user: state.userReducer.user
    })
}

export default connect(mapStateToProps)(CommentContainer)