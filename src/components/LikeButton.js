import React, { Component } from 'react';
import Heart from "react-animated-heart";
import { addLike } from '../actions/likeActions';
import { connect } from 'react-redux';


class LikeButton extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
    
        let post = { 
            user_id: this.props.user.id,
            body: this.state.body
        }
        this.props.addPost(post)
        this.setState({
            body: ''
        })

    }

    render(){
        return (
                <div>
                    <Heart 
                        onClick={this} 
                    />
                </div>
        )
    }    
}

const mapStateToProps = (state) => {
    return({
      user: state.userReducer.user,
      post: state.postReducer.post
    })
};

export default connect(mapStateToProps)(LikeButton);