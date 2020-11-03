import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap'


const Home = (props) => {
    const handleClick = () => {
        axios.delete('http://localhost:3001/logout', {withCredentials: true})
            .then(res => {props.handleLogout()
                props.history.push('/')
            })
            .catch(error => console.log(error))
    }
    
    return (
        <Container>
            <div>
                <h1 id="title"><strong>FriendHub</strong></h1>
                <Link to='/login'>Log In</Link>
                <br></br>
                <Link to='/signup'>Sign Up</Link>
                <br></br>
                {
                    props.loggedInStatus ? 
                    <Link to='/logout' onClick={handleClick}>Logout</Link> : null
                }
            </div>
        </Container>
    );
};
export default Home;
