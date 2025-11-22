import React from 'react';
import { useLoaderData } from 'react-router';
import User from './user';

const Users = () => {
    const datas = useLoaderData()

    return (
        <div>
            {datas.map(user=><User key={user.id} user={user}></User>)}
        </div>
    );
};

export default Users;