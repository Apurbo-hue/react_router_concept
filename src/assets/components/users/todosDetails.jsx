import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const TodosDetails = () => {

    const todosDetails = useLoaderData();
    const navigate = useNavigate()
    const {id,title}=todosDetails
    return (
        <div>
            <h1>{id}</h1>
            <p>Title: {title}</p>
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
    );
};

export default TodosDetails;