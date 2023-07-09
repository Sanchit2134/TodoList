import {useState} from 'react';
import {v4 as uuid} from 'uuid';
import styles from './AddTodoForm.module.css';

function AddTodoForm({addTodo}) {
    const [todoTitle,setTodoTittle] = useState("");
    const handleSubmit = (e)=>{                                 
        e.preventDefault();
        const newTodo = {
            completed: false,
            title: todoTitle,
            id: uuid(),
        };
        addTodo(newTodo);
        setTodoTittle("");  
    };
  return (
  <form onSubmit={handleSubmit} className={styles.todoForm}>
    <input 
    type='text' 
    name='todoTitle' 
    id="todoTitle" 
    value={todoTitle} 
    onChange={(e)=>setTodoTittle(e.target.value)}
    />
    <button type='submit'>Add Todo</button>
  </form>
  )
}

export default AddTodoForm