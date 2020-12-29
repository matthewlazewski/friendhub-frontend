import React, { useState } from 'react';
import Heart from "react-animated-heart";

const LikeButton = () => {
    const [isClick, setLike] = useState(false);

    return (
        <div>
            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
        </div>
    )
}

export default LikeButton;