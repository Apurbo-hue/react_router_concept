import React from 'react';
import { useLoaderData } from 'react-router';

const UsersDetails = () => {
    const userDetails = useLoaderData();
    const {name,email,address}= userDetails;
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            <h2>Address: {address.city}</h2>
        </div>
    );
};

export default UsersDetails;