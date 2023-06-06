import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import {logo,menu,close} from '../../assets';
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    // const [active, setActive] = useState(false);
    // const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => { }, [])
    return (
  
      <div className='navbar'>
        <div className="nav-brand-logo">
          <Link to="/" className='navbar-brand-logo-link'>
            <img src={logo} className='nav-logo' alt="logo" />
          </Link>
        </div>
        <div className='brand-name'>YourNews</div>
        <ul className='main-list'>
          <li>
            <Link className='list-item' to='/business' >business
            </Link>
          </li>
  
          <li>
  
            <Link className='list-item' to='/tech
            ' >
              Tech
            </Link>
          </li>
          <li>
  
            <Link className='list-item' to='/health'>
              health
            </Link>
          </li>
          <li>
            <Link className='list-item' to='/nation' >
              nation
            </Link>
          </li>
          <li>
  
            <Link className='list-item' to='/science'>
              science
            </Link>
          </li>
          <li>
  
            <Link className='list-item' to='/world'>
              world
            </Link>
          </li>
  
        </ul>
  
  
        <div className='navbar-mobile' >
  
          <img id='navbar-toggle' className='navbar-toggle'
            src={toggle ? close : menu} alt='menu'
            onClick={() => { setToggle(!toggle) }}
          />
  
          <div className='navbar-list-mobile-container' style={!toggle ? { display: 'none' } : { display: '' }}>
            <ul className='navbar-list-mobile'>
              <li className='navbar-list-mobile-item'>
                <Link to='/business'
                  className='navbar-list-mobile-link' >business
                </Link>
              </li>
  
              <li className='navbar-list-mobile-item'>
                <Link to='/tech'
                  className='navbar-list-mobile-link' >
                  Tech
                </Link>
              </li>
              <li className='navbar-list-mobile-item'>
  
                <Link to='/health' className='navbar-list-mobile-link' >
                  health
                </Link>
              </li>
              <li className='navbar-list-mobile-item'>
  
                <Link to='/nation' className='navbar-list-mobile-link' >
                  nation
                </Link>
              </li>
              <li className='navbar-list-mobile-item'>
  
                <Link to='/science' className='navbar-list-mobile-link' >
                  science
                </Link>
              </li>
              <li className='navbar-list-mobile-item'>
  
                <Link to='/world' className='navbar-list-mobile-link' >
                  world
                </Link>
              </li>
  
            </ul>
          </div>
  
        </div>
  
      </div>
    )
  }



export default Navbar