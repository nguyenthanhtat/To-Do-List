import React,{useState} from 'react'
import Todo from './Todos'
import List from './List'
const TodoList = () => {
    const [todos,setTodos] = useState([
        {
            id:1,
            task:"xin chao tat"
        }
    ])
    const update = (id, updateTask) => {
        setTodos(
          todos.map((item) => {
            if (item.id === id) {
              return { ...item, task: updateTask };
            }
            return item;
          })
        );
      };
    return (
        <>
            <Todo  todos={todos} setTodos={setTodos}/>
            
            {todos.map((item)=>{
                return(
                

                        <List id ={item.id} task={item.task} todos={todos} setTodos={setTodos} updateTodo={update}/>    
                    
                )
            })}
            
        </>
    )
}

export default TodoList
