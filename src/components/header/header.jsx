import { NavLink } from "react-router-dom"
import React from "react"
// import css from './header.module.css'



const Header= ()=>{
return (
<header>
    <nav>
        <ul>
            <li>
                <NavLink to="./">Home</NavLink>
            </li>
            <li>
                <NavLink to="/movies">Movies</NavLink>
            </li>
        </ul>
    </nav>
</header>

)
}

export default Header