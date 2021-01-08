import React, { Component } from 'react';
import Heart from "react-animated-heart";
import { addLike } from '../actions/likeActions';
import { connect } from 'react-redux';


class LikeButton extends Component {

    state = { liked: false };

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        let like = { 
            user_id: this.props.user.id,
            post_id: this.props.post.id
        }

        this.setState({
            liked: true
        })
        
        this.props.addLike(like)

    }

    render(){
        return (
            <Heart size="small" onClick={this.handleSubmit} /> 
        )
    }    
}

const mapStateToProps = (state) => {
    return({
      user: state.userReducer.user,
      post: state.postReducer.post
    })
};

export default connect(mapStateToProps, { addLike })(LikeButton);