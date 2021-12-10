import React, { useState } from 'react'

const List = ({id,task,setTodos,todos,updateTodo}) => {
    const [edit,setEdit]=useState(false)
    const [editStack,setEditStack]=useState(task)

    const Remove = (id) => {
        if(window.confirm("Are you sure you want to remove")){
            setTodos(todos.filter((item)=>item.id !==id));
        }
    }
    const handleUpload = (e) => {
        e.preventDefault();
        updateTodo(id, editStack);//?
    
        setEdit(false);//?
      };
    return (

        <>  
        {edit ?( 
            <>
            <form className="Todo-edit-form" onSubmit={handleUpload}>
                <input type='text' name='task' value={editStack} 
                onChange={(e)=>setEditStack(e.target.value)}
                >
                </input>
                <button>save</button>

            </form>
            </>
        ):(
            <li key={id}  >
            {task}
        </li>
        )}

            <button onClick={()=>Remove(id)}>X </button>
            <button onClick={() => setEdit(true)}>Edit</button>
        </>
    )
}

export default List
