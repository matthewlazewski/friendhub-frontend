import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'


class PostForm extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            body: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {body} = this.state
    
        let post = {
            user_id: this.props.userId,
            body
        }

        
        axios.post('http://localhost:3001/api/v1/posts', {post})
            .then(response => {
            if (response.data) {
                post = response.data.post
                this.setState({
                    body: response.data.post.body
                })
                this.props.dispatch({type: 'ADD_POST', post })  
            } else {
                this.setState({
                errors: response.data.errors
                })
            }
            })
            .catch(error => console.log('api errors:', error))  
    
    }

    handleInput(e) {
        this.setState({
            body: e.target.value
        })
    }

    render(){
        return (
            <div>
                <form className="new-post-form" onSubmit={this.handleSubmit} >
                    <textarea name="body" rows="2" cols="80"
                        onChange={(e) => this.handleInput(e)}
                        placeholder="What's on your mind?"
                        value = {this.state.body}
                    />
                    <button type="submit" name="">Post</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      post: state.postReducer.post
    };
};

export default connect(mapStateToProps)(PostForm)
