import React from 'react';
import Post  from './Post';
import Comments from './Comments'
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap'

function Posts({comments, id, user, posts}){

    comments = comments.filter(comment => id === comment.postId)
    
    const postList = posts.map(post => {
        return( 
            <Row key={post.id}>
                <Col key={post.id} > 
                    <Post 
                        key ={post.id} 
                        post={post}
                        user ={user} 
                    />
                <Comments comments={comments} />
                </Col>
            </Row>
            )
    })
    return (
        <Container>
            <div className="App">
                <ul style={{listStyleType: 'none', display: 'flex', flexDirection: 'column'}}>
                    {postList}

                </ul>
            </div>
        </Container>
    )
}

const mapStateToProps = state => {
    return({
        posts: state.postReducer.posts,
        comments: state.commentReducer.comments
    })
}

export default connect(mapStateToProps)(Posts);