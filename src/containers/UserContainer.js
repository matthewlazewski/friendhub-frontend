import React from 'react';
import { fetchPosts } from '../actions/postActions'
import { connect } from 'react-redux';
import User from '../components/User'
import PostForm from '../components/PostForm'
import Posts from '../components/Posts'


class UserContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchPosts()
    }

    render(){
        return(
            <div>
                <User user={this.props.user} />
                <Posts  />
                <PostForm />
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = dispatch => {
    return{
        fetchPosts: () => {
            dispatch(fetchPosts())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);