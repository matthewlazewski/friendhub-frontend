import React from 'react';
import { connect } from 'react-redux';
import CommentForm from '../components/CommentForm'


class CommentContainer extends React.Component {
    render(){
        return (
            <div className="App">
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