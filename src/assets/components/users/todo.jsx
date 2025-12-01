import React from 'react';
import { Link, useNavigate } from 'react-router';

const Todo = ({todo}) => {
    const {title,id}=todo
    let navigate = useNavigate()
    return (
        <div style={{border:"1px solid red",padding:"10px",margin:"20px 0px",borderRadius:"20px"}}>
            <h1>{title}</h1>
            {/* <Link to={`/todos/${id}`}><button>Click here for info</button></Link> */}
            <button onClick={()=>navigate(`/todos/${id}`)} >Click for info</button>
        </div>
    );
};

export default Todo;