import React from "react";
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
    return (
        <div className='menu'>
            <ul>
                <li><Link to='/'>Projects</Link></li>
                <li><Link to='/to-dos'>To-Do`s</Link></li>
                <li><Link to='/users'>Users</Link></li>
            </ul>

        </div >
    )
}

export default Menu