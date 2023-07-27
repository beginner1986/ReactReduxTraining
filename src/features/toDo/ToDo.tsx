import { useAppDispatch, useAppSelector } from "../../app/store/configureStore"

export default function ToDo() {
    const dispatch = useAppDispatch();
    const { todos } = useAppSelector(state => state.todo)

    return (
        <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 style={{margin: '15px', fontSize: 'xx-large'}}>To Do List</h1>
            <ul>
                { todos.map(todo => {
                    return (
                        <li key={todo.title} style={{display: 'flex'}}>
                            {todo.isDone ?
                                <div style={{color: 'green'}}>&#10004;</div> :
                                <div style={{color: 'red'}}>&#10060;</div>} 
                            {todo.title}
                        </li>
                    );
                }) }
            </ul>
        </main>
    )
}