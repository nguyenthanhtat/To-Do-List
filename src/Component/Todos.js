import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
const Todos = ({todos,setTodos}) => {
    const[task,setTask]=useState("")
    const newTodo={
        id:uuidv4(),
        task:task
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!task){
            return alert("vui long them cong viec");
        }
        setTodos([...todos,newTodo]);
        setTask("");
        
    };
    console.log(todos,'todo')
    return (
        <>
            <form section='' onSubmit={handleSubmit}>
                <input
                type='text'
                name='task'
                placeholder="Enter Task"
                value={task}
                onChange = {e=>setTask(e.target.value)}
                />
                <button>Add</button>
            
            </form>
        </>
    )
}

export default Todos
