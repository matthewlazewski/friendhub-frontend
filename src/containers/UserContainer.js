import React from 'react';
import { connect } from 'react-redux';
import User from '../components/User'
import PostForm from '../components/PostForm'
import Post from '../components/Posts'


class UserContainer extends React.Component {
    render(){
        return(
            <div>
                <User user={this.props.user} />
                <Post />
                <PostForm />
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => ({ user })

// const mapDispatchToProps = dispatch => ({addUser: user =>({type: 'ADD_USER', user }) })

export default connect(mapStateToProps)(UserContainer);