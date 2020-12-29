import React from 'react';
import { connect } from 'react-redux'
import Post from './Post';
import { Container, Row } from 'react-bootstrap'

class Posts extends React.Component {

    render(){
        const { posts } = this.props 
        const postList = posts.map(post => {
            return( 
                <Row key={post.id} >
                    <Post 
                key ={post.id} 
                post={post} 
                    />
                </Row>)
        })
        return (
            <Container className="posts">
                <div className="App">
                    <ul className="posts" style={{listStyleType: 'none', display: 'flex', flexDirection: 'column'}}>
                        {postList}
                    </ul>
                </div>
            </Container>
        )
    }
}

export default connect()(Posts);