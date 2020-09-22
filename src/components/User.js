import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component  {
    
    render (){ 
        return (
            <div>
                <h1>Name: {this.props.user.name} </h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.userReducer.user
    };
};

export default connect(mapStateToProps)(User);