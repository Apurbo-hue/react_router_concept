import React from 'react';
import { useLoaderData } from 'react-router';
import Post from './post';

const Posts = () => {
    const postDatas = useLoaderData();

    return (
        <div>
            {postDatas.map(post=><Post key={post.id} post={post}></Post>)}
        </div>
    );
};

export default Posts;