import React from 'react'
import image404 from '../404.jpg';
import './error404.css'
const Error404 = () => {
    return (
        <div className='error-wrapper'>
            <p className='error-text'>page not found</p>
            <img className='error-image' draggable='false' src={image404} alt='error-logo' />
        </div>
    )
}

export default Error404