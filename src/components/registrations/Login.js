import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Container, Button } from 'react-bootstrap'


class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
        isLoggedIn: false,
        name: '',
        email: '',
        password: '',
        errors: ''
        };
    }
    
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
        [name]: value
        })
    };
    
    handleSubmit = (event) => {
        event.preventDefault()
        const {name,email, password} = this.state
    
        let user = {
        name: name,
        email: email,
        password: password
        }
        
        
        axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
            .then(response => {
            if (response.data.logged_in) {
                user = response.data.user.data
                this.setState({
                    isLoggedIn: true,
                    user: response.data.user
                })
                this.props.dispatch({type: 'ADD_USER', user })  
                this.redirect()
            } else {
                this.setState({
                    errors: response.data.errors
                })
            }
            })
            .catch(error => console.log('api errors:', error))  
    };

    redirect = () => {
        this.props.history.push('/profile')
    }

    handleErrors = () => {
        return (
        <div>
            <ul>
            {this.state.errors.map(error => {
            return <li key={error}>{error}</li>
            })}
            </ul>
        </div>
        )
    }
    render() {
        const {email, password} = this.state
        return (
            <Container>
                <div className="App">
                    <h1>Log In</h1>
                    <form onSubmit={this.handleSubmit}>
                    {/* <input
                        placeholder="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    /> */}
                    <input
                        placeholder="email"
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <Button placeholder="submit" type="submit">
                        Log In
                    </Button>
                    <div>
                    or <Link to='/signup'>sign up</Link>
                    </div>
                    
                    </form>
                    <div>
                    {
                        this.state.errors ? this.handleErrors() : null
                    }
                    </div>
                </div>
            </Container>
        );
    }
}



export default connect()(Login);

