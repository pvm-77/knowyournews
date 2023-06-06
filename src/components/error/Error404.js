import React from 'react'
import {logo404} from '../../assets';
import './error404.css'
const Error404 = () => {
    return (
        <div className='error-wrapper'>
            <p className='error-text'>page not found</p>
            <img className='error-image' draggable='false' src={logo404} alt='error-logo' />
        </div>
    )
}

export default Error404