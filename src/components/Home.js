import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles'
import { Container, Button } from 'react-bootstrap'

const styles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      textAlign: 'center'
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
                <h1>FriendHub</h1>
                <Button><Link to='/login'>Log In</Link></Button>
                <br></br>
                <Button><Link to='/signup'>Sign Up</Link></Button>
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
