import React, { Component } from 'react';
import axios from 'axios'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
// import { routerActions } from 'react-router-redux';
import { connect } from 'react-redux'
import { addUser } from './actions/userActions'
import { fetchPosts } from './actions/postActions'
import Home from './components/Home'
import Login from './components/registrations/Login'
import Signup from './components/registrations/Signup'
import UserContainer from './containers/UserContainer';



class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }
  
  componentDidMount() {
    this.props.fetchPosts();
    this.loginStatus();
  }
  
  
  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
  
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
  
  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }
    
  render() {
      return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route 
                exact path='/' 
                render={props => (
                <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
                )}
              />
              <Route 
                exact path='/login' 
                render={props => (
                <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
                )}
              />
              <Route 
                exact path='/signup' 
                render={props => (
                <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
                )}
              />
              <Route 
                path='/profile'
                render={props => (
                <UserContainer {...props} />
                )}
              /> 
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, { addUser, fetchPosts })(App);

// const userIsAuthenticated = connectedRouterRedirect({
//   redirectPath: '/login',
//   authenticatedSelector: state => state.user.data !== null,
//   wrapperDisplayName: 'UserIsAuthenticated'
// })
