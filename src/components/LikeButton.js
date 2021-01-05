import React, { Component } from 'react';
import Heart from "react-animated-heart";
import { addLike } from '../actions/likeActions';
import { connect } from 'react-redux';


class LikeButton extends Component {

    state = { liked: false };

    handleSubmit = (e) => {
        e.preventDefault()
    
        let like = { 
            user_id: this.props.user.id,
            body: this.state.body
        }

        this.setState({
            liked: true
        })
        
        this.props.addLike(like)

    }

    render(){
        return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        {this.state.liked === false ? (
                            <Heart isClick={false} />) : (
                            <Heart isClick={true} />
                        )}
                    </form>
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

export default connect(mapStateToProps, { addLike })(LikeButton);