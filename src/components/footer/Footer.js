import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';
const Footer = () => {
    return (
      <footer>
        <div className="footer-content">
          <p>Made with
            <span className="heart">&#x1F493;</span> by
            <Link to='https://github.com/pvm-77' target="_blank" rel="noopener noreferrer">
              <span className="name">Hussain Sarfaraz</span></Link>
          </p>
        </div>
      </footer>
    )
  }

export default Footer