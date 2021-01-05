import React from 'react'
import Comment from './Comment'
import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'



class Comments extends React.Component {

    render(){
    
        const comments  = this.props.comments
        const commentList = comments.map(comment => {
            return( 
                <Row  key={comment.id}> 
                    <Comment 
                        key ={comment.id} 
                        comment={comment} 
                    />
                </Row>
        )})

        return(
            <Container>
                <div >
                    <ul>
                        {commentList}
                    </ul>
                </div>
            </Container>
        )
    }
}

const mapStateToProps= state => ({
    currentUser: state.userReducer.user
})

export default connect(mapStateToProps)(Comments);