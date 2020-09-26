import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import axios from 'axios';

const NavBar = (props) => {
    
    const handleClick = () => {
        axios.delete('http://localhost:3001/logout', {withCredentials: true})
            .then(res => {props.handleLogout()
                props.history.push('/')
            })
            .catch(error => console.log(error))
    }

    return(
        <Container>
            <div> 
               <Link to='/logout' onClick={handleClick}>Logout</Link> 
            </div>
        </Container>
    )
}

export default NavBar