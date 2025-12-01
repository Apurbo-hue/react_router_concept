import { Link } from 'react-router';
import React from 'react';
import { NavLink } from 'react-router';

const Post = ({post}) => {

    const postStyle ={
        border:"2px solid yellow",
        padding:"10px",
        borderRadius:"10px",
        margin:"10px 0",
    }
    const {id,title,body}=post
    return (
        <div style={postStyle}>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
            <Link to={`/posts/${id}`}><button>Click for details</button></Link>
        </div>
    );
};

export default Post;