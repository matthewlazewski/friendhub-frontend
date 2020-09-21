import React from 'react';
import { connect } from 'react-redux';


class UserProfile extends React.Component {
    
    render(){
        return(
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user 
    }
}

export default connect(mapStateToProps)(UserProfile);