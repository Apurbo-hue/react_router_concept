import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const AlbumsDetails = () => {
    const albumsData = useLoaderData()
    const params = useParams()
    const navigate = useNavigate()
    console.log(params)
    const {title}=albumsData
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    );
};

export default AlbumsDetails;