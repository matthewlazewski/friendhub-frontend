import React, { useState } from 'react';
import Heart from "react-animated-heart";
import { axios } from 'axios';
import { addLike } from '../actions/likeActions';
import { connect } from 'react-redux';


const LikeButton = (props) => {
    const [isClick, setLike] = useState(false);
    const { user, post } = props

    function addLike(e){

        let like = {
            user_id: user.id,
            post_id: post.id
        };

        axios.post('http://localhost:3001/api/v1/likes', {like}, {withCredentials: true})
            .then(response => {
                if (response.data) {
                    like = response.data.like.data
                    setLike(true)
                    this.props.dispatch({type: 'ADD_LIKE', like })

                } else {
                    console.log(response.data.errors)
                }
            })
            .catch(error => console.log('api errors:', error))  
    }


    return (
        <div>
            <Heart isClick={isClick} onClick={(e) => addLike(e)} />
        </div>
    )
}

export default connect()(LikeButton);