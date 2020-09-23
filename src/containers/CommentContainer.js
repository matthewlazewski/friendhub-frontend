import React from 'react';
import { connect } from 'react-redux';
import Comments from '../components/Comments'
import CommentForm from '../components/CommentForm'

class CommentContainer extends React.Component {
    render(){
        return (
            <div className="App">
                <Comments />
                <CommentForm />
            </div>
        )
    }
}

export default connect()(CommentContainer)