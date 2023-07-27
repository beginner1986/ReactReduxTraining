import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore"
import { addToDoItem, toggleIsDone } from "./todoSlice";

export default function ToDo() {
    const dispatch = useAppDispatch();
    const { todos } = useAppSelector(state => state.todo)
    const [newToDo, setNewTodo] = useState<string>('');

    const handleNewToDoChange = (event: any) => {
        setNewTodo(event.target.value);
    }

    const handleFormSubmit = (event: any) => {
        event.preventDefault();
        dispatch(addToDoItem(newToDo));
        setNewTodo('');
    }

    return (
        <main style={{margin: '0 20%', display: 'flex', flexDirection: 'column', justifyContent: 'left'}}>
            <h1 style={{margin: '15px', fontSize: 'xx-large', textAlign: 'center'}}>To Do List</h1>

            <form style={{display: 'flex', flexDirection: 'row'}}>
                <label style={{width: '70%'}}>New task: 
                    <input 
                        type='text' 
                        name='new-task'
                        style={{width: '70%'}}
                        onChange={handleNewToDoChange}
                    />
                </label>
                <input 
                    type='submit' 
                    value='Add' 
                    style={{width: '20%'}} 
                    onClick={handleFormSubmit}
                />
            </form>
            
            <hr style={{margin: '10px'}}/>
            
            <ul>
                { todos.map(todo => {
                    return (
                        <li 
                            key={todo.title} 
                            onClick={() => dispatch(toggleIsDone(todo.title))}
                        >
                            {todo.isDone ?
                                <div style={{color: 'green', width: '2rem'}}>&#10004;</div> :
                                <div style={{color: 'red', width: '2rem'}}>&#10060;</div>} 
                            {todo.title}
                        </li>
                    );
                }) }
            </ul>
        </main>
    )
}