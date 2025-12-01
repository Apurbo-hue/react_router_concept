import React from 'react';
import { useLoaderData } from 'react-router';
import Todo from './todo';

const Todos = () => {
    const todosData = useLoaderData()
    // console.log(todosData)
    return (
        <div>
            {todosData.map(todo=><Todo todo={todo}></Todo>)}
        </div>
    );
};

export default Todos;