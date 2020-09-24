import React from 'react';
import Post  from './Post';
import { Container, Row, Col } from 'react-bootstrap'

class Posts extends React.Component {
    componentDidUpdate(){
        console.log('updated')
    }

    render(){
        const { posts } = this.props 
        const postList = posts.map(post => {
            return( 
                <Row key={post.id}>
                    <Col key={post.id} > 
                        <Post 
                            key ={post.id} 
                            post={post} 
                        />
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
}

export default Posts;