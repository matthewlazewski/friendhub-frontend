import React from 'react'
import Comment from './Comment'
import { Container, Row, Col } from 'react-bootstrap'



class Comments extends React.Component {
    render(){
        const { comments } = this.props
        const commentList = comments.map(comment => {
            return( 
                <Row key={comment.id}> 
                    <Comment 
                        key ={comment.id} 
                        comment={comment} 
                    />
                </Row>
        )})

        return(
            <Container>
                <div className="App">
                    <ul style={{listStyleType: 'none', display: 'flex', flexDirection: 'column'}}>
                        {commentList}
                    </ul>
                </div>
            </Container>
        )
    }
}

export default Comments;