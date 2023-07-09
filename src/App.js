import './App.css';
import Todo from './Todo';
import { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import styles from './Todo.module.css';  

function App(){
  const [todos,setTodos] = useState([
    {id: 1, title: "Morning workout", completed: true},
    {id: 2, title: "Morning meal", completed: false},
    {id: 3, title: "Start hustle", completed: false},
  ]);

  function deleteTodo(id){
    setTodos((prevTodos)=>{
      return prevTodos.filter((todo)=>todo.id !== id);
    })
  }

  function toggleCompleted(id){
    setTodos((prevTodos)=>{
      return prevTodos.map((todo)=>{
        if(todo.id === id){
          return{...todo,completed: !todo.completed};
        }
        else{
          return todo;
        } 
      });
    });
  }

  function addTodo(newTodo){
    setTodos(prevTodos => [...prevTodos,newTodo])
  }

  function clearAll(){
    setTodos([]);
  }

  return (
    <div className = {styles.todo}>
      <h1>Todo App</h1>

      <AddTodoForm addTodo={addTodo}/>
      {todos.map((todo) =>{
        return (
          <Todo
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          id={todo.id }
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
          />
        );
        })}
        {todos.length > 0  && <button onClick={clearAll}>Clear All</button>}
    </div>
  )
}
export default App;