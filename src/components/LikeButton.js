import React, { Component } from 'react';
import Heart from "react-animated-heart";
import { axios } from 'axios';
import { connect } from 'react-redux';


class LikeButton extends Component {

    addLike = () => {
        console.log(this)

        let liked;

        const { user, post } = this;

        let like = {
            user_id: user.id,
            post_id: post.id
        };

        axios.post('http://localhost:3001/api/v1/likes', {like}, {withCredentials: true})
            .then(response => {
                if (response.data) {
                    like = response.data.like.data
                    liked = true;
                    this.props.dispatch({type: 'ADD_LIKE', like })

                } else {
                    console.log(response.data.errors)
                }
            })
            .catch(error => console.log('api errors:', error))  
    }

    render(){
        return (
                <div>
                    <Heart 
                        onClick={this.addLike()} 
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