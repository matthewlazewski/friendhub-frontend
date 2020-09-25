import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'


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
            user_id: this.props.user.id,
            body
        }

        
        axios.post('http://localhost:3001/api/v1/posts', {post}, {withCredentials: true})
            .then(response => {
            if (response.data) {
                post = response.data.post.data
                this.setState({
                    body: response.data.post.data.attributes.body
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
            <Container>
                <form className="new-post-form" onSubmit={this.handleSubmit} >
                    <textarea name="body" rows="2" 
                        onChange={(e) => this.handleInput(e)}
                        placeholder="What's on your mind?"
                        value = {this.state.body}
                    />
                    <button type="submit" name="">Post</button>
                </form>
                <br></br>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.userReducer.user, 
    };
};

export default connect(mapStateToProps)(PostForm)
