import { useAppDispatch, useAppSelector } from "../../app/store/configureStore"
import { toggleIsDone } from "./todoSlice";

export default function ToDo() {
    const dispatch = useAppDispatch();
    const { todos } = useAppSelector(state => state.todo)

    return (
        <main style={{margin: '0 20%', display: 'flex', flexDirection: 'column', justifyContent: 'left'}}>
            <h1 style={{margin: '15px', fontSize: 'xx-large', textAlign: 'center'}}>To Do List</h1>
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