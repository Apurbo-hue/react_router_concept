import React from 'react';
import { Navigate, useNavigate } from 'react-router';

const Album = ({album}) => {
          const navigate = useNavigate()
          const {id,title}=album
    return (
        <div>
            <h2 style={{padding:"10px",border:"2px solid yellow",borderRadius:"10px"}}>{title}</h2>
            <button onClick={()=>navigate(`/albums/${id}`)
            }>Click for info</button>
        </div>
    );
};

export default Album;