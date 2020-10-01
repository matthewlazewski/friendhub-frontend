import React from 'react';
import { addPost } from '../actions/postActions'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'




class PostForm extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            body: '',
        }
    }

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



export default connect(mapStateToProps, { addPost })(PostForm)
