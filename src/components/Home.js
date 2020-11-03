import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles'
import { Container } from 'react-bootstrap'

const styles = makeStyles({
    root: {
      color: 'black',
      textAlign: 'center',
    }
});

const Home = (props) => {
    const classes = styles();
    const handleClick = () => {
        axios.delete('http://localhost:3001/logout', {withCredentials: true})
            .then(res => {props.handleLogout()
                props.history.push('/')
            })
            .catch(error => console.log(error))
    }
    
    return (
        <Container>
            <div className={classes.root}>
                <h1><strong>FriendHub</strong></h1>
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
