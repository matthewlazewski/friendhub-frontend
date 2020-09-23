import React from 'react'
import { connect} from 'react-redux';
import CommentForm from './CommentForm'

class Comment extends React.Component {
    render(){
        return(
            <div>
                comments will go here <br></br>
                <CommentForm />
            </div>
        )
    }
}

export default connect()(Comment)