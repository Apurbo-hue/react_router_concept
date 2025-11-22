import React from 'react';
import { NavLink } from 'react-router';


const User = ({user}) => {
    console.log(user)
    const {id,name,email,phone} = user;
    const userStyle={
     border:"2px solid yellow",
     padding:"10px",
     marginTop:"10px",
     marginBottom:"10px",
     borderRadius:"15px"
}
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h3>{phone}</h3>
            <NavLink to={`/users/${id}`}>Click for details</NavLink>
        </div>
    );
};

export default User;