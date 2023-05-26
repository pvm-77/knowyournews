import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../news.png'
import './navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-brand-logo'>
                <Link to='/' >
                    <img src={logo} alt='logo' width={80} height={80} />
                </Link>
            </div>

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