import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <h2>myNews</h2>
            <ul>


                <li><Link to='/busines'>busines</Link></li>
                <li><Link to='/technolgy'>technolgy</Link></li>
                <li><Link to='/sports'>sports</Link></li>
                <li><Link to='/science'>science</Link></li>
                <li> <Link to='/health'>health</Link> </li>
                <li><Link to='/world'>world</Link> </li>
                <li> <Link to='/nation'>nation</Link>  </li>
            </ul>
        </div>
    )
}

export default Navbar