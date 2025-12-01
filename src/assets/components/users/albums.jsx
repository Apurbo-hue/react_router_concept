import React from 'react';
import { useLoaderData } from 'react-router';
import Album from './album';

const Albums = () => {
    const loaderData = useLoaderData()

    return (
        <div>
            {loaderData.map(album=><Album key={album.id} album={album}></Album>)}
        </div>
    );
};

export default Albums;