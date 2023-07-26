import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header id='header'>
            <NavLink to={'/'}>Counter</NavLink>
            <NavLink to={'/asyncCounter'}>Async Counter</NavLink>
            <NavLink to={'/colors'}>Colors</NavLink>
            <NavLink to={'/toDo'}>To Do</NavLink>
        </header>
    )
}