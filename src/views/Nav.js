import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import '../views/Nav.scss';

import {
    Link
} from "react-router-dom";

const Nav = () => {
    return (
        <ul>
            <li>
                <NavLink activeClassName='active' exact="true" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to="/user">User</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to="/todo">Todo</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to="/about">About</NavLink>
            </li>
        </ul>
    )
}

export default Nav