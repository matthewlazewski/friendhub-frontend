import React from 'react';
import Comments from './Comments';
import { connect} from 'react-redux';

class Posts extends React.Component {
    allposts = () => {
        return this.props.fetchPosts.map(post => <p key={post.id}>{post.body}</p>)
    }
    
    render(){
        debugger
        return (
            <div>
                <h1>posts go here</h1>
                <p>{this.props.user.name}</p>
                <Comments />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.userReducer.user, 
    };
};

export default connect(mapStateToProps)(Posts);