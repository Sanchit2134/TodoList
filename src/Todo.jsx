import styles from "./Todo.module.css";
const Todo = ({title,completed,deleteTodo,toggleTodo,id,toggleCompleted})=>{
    return(
        <div className= {styles.todo}>
            <h2 className={completed ? styles.completed : null}>{title}</h2>
            <div className={styles.buttonWrapper}>
                <button className="delete" onClick={()=>{deleteTodo(id)}}>Delete</button>
                <button className="done" onClick={()=>{toggleCompleted(id)}}>
                    {completed ? "Undone":"done"} 
                </button>
            </div>
        </div>  
    )
}
export default Todo;