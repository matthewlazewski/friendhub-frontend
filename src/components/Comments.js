import React from 'react'
import { connect} from 'react-redux';


class Comment extends React.Component {
    render(){
        return(
            <div>
                comments will go here <br></br>
            </div>
        )
    }
}

export default connect()(Comment)