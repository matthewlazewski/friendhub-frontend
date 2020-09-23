import React from 'react';

class Posts extends React.Component {

    allposts = () => {
        return this.props.posts.map(post => <p key={post.id}>{post.body}</p>)
    }
    
    render(){
        return (
            <div>
                <h1>posts go here</h1>
                <p>put comment container here</p>
            </div>
        )
    }
}

export default Posts;