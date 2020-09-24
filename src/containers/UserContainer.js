import React from 'react';
import { connect } from 'react-redux';
import User from '../components/User'
import PostForm from '../components/PostForm'
import Posts from '../components/Posts'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'

class UserContainer extends React.Component {
    
    render(){
        return(
            <Container>
                <div className="App">
                    <User user={this.props.user} />
                    <PostForm user={this.props.user} />
                    <Row>
                        <Posts 
                        posts={this.props.posts} 
                        deletePost={this.props.deletePost}/>
                    </Row>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return ({
    user: state.userReducer.user,
    posts: state.postReducer.posts,
    post: state.postReducer.post})
}

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch({type: 'ADD_POST', post}),
    deletePost: id => dispatch({type: 'DELETE_POST', id})
})

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);