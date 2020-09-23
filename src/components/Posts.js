import React from 'react';
import Comments from './Comments';
import Post  from './Post';

class Posts extends React.Component {
    componentDidUpdate(){
        console.log('updated')
    }

    render(){
        const { posts, deletePost } = this.props 
        const postList = posts.map(post => {
            return( 
            <Post 
            key ={post.id} 
            post={post} 
            deletePost={deletePost}
            />)
        })
        return (
            <div className="App">
                <ul>
                    {postList}
                </ul>
            </div>
        )
    }
}

export default Posts;