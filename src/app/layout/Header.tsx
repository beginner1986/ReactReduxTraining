import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div id='header'>
            <NavLink to={'/'}>Counter</NavLink>
            <NavLink to={'/colors'}>Colors</NavLink>
        </div>
    )
}