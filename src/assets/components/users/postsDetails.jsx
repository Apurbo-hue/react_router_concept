import React from 'react';
import { useLoaderData } from 'react-router';

const PostsDetails = () => {
    const postsDetails= useLoaderData();
    const {title,id}=postsDetails
    return (
        <div>
            <h1>{id}</h1>
            <p>{title}</p>
        </div>
    );
};

export default PostsDetails;