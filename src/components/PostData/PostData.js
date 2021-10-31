import React from 'react';
import './PostData.css'

const PostData = (props) => {
    const {image} = props.postData
    return (
        <div className="post-data-card">
            <img src={image} alt=""/>
        </div>
    );
};

export default PostData;