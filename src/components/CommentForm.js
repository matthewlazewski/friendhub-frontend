import React from 'react'
import axios from 'axios'
import { connect} from 'react-redux';

class CommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            content: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {content} = this.state
    
        let comment = {
            user_id: this.props.userId,
            content
        }

        
        axios.post('http://localhost:3001/api/v1/comments', {comment})
            .then(response => {
            if (response.data) {
                comment = response.data.data
                this.setState({
                    content: response.data.data.attributes.body
                })
                this.props.dispatch({type: 'ADD_COMMENT', comment })  
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
                <form className="new-comment-form" onSubmit={this.handleSubmit} >
                        <input name="content" 
                            onChange={(e) => this.handleInput(e)}
                            placeholder="Comment"
                            value = {this.state.content}
                        />
                        <button type="submit" name="">Post Comment</button>
                    </form>
            </div>
        )
    }
}

export default connect()(CommentForm)