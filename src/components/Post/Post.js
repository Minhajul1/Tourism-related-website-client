import React from 'react';
import PostData from '../PostData/PostData';
import post1 from '../../images/dubai.jpg'
import post2 from '../../images/img1.jpeg'
import post3 from '../../images/img2.jpg'
import post4 from '../../images/img3.jpg'
import post5 from '../../images/img4.jpg'
import post6 from '../../images/img5.jpg'
import './Post.css'

const Post = () => {
    const posts =[
        {image: post1},
        {image: post2},
        {image: post3},
        {image: post4},
        {image: post5},
        {image: post6},
    ]
    return (
        <div>
            <h1>Gallery</h1>
            <div className="post-card">
            {
                posts.map(postData => <PostData postData ={postData}></PostData>)
            }
            </div>
        </div>
    );
};

export default Post;