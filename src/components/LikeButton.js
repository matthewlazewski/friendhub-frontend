import React, { Component } from 'react';
import { Button }  from 'react-bootstrap'

export default class LikeButton extends React.Component {

    state = {
        likes: 0
    };

    addLike = () => {
        let newCount = this.state.likes + 1;
        this.setState({
            likes: newCount
        });
    }

    render() {
        return (
            // Like button for each post
            <div class = "likeButton">
                <Button onClick={this.addLike}>Like</Button>
                <p>Likes: {this.state.likes}</p>
            </div>
        )
    }
}