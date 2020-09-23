import React from 'react';
import { connect } from 'react-redux';
import User from '../components/User'
import PostForm from '../components/PostForm'
import Posts from '../components/Posts'


class UserContainer extends React.Component {
    
    render(){
        return(
            <div className="App">
                <User user={this.props.user} />
                <Posts 
                posts={this.props.posts} 
                deletePost={this.props.deletePost}/>
                <PostForm user={this.props.user} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return ({
    user: state.userReducer.user,
    posts: state.postReducer.posts})
}

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch({type: 'ADD_POST', post}),
    deletePost: id => dispatch({type: 'DELETE_POST', id})
})

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);