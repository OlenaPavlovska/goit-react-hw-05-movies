import { NavLink } from "react-router-dom"
import React from "react"
import css from './header.module.css'



const Header= ()=>{
return (
<header className={css.header}>
    <nav>
        <ul className={css.nav}>
            <li >
                <NavLink className={css.list} to="./">HOME</NavLink>
            </li>
            <li>
                <NavLink className={css.list} to="/movies">MOVIES</NavLink>
            </li>
        </ul>
    </nav>
</header>

)
}

export default Header