
import './App.css';
import ham from './ham.png';
import error403 from './3805046.jpg'

import cancel from './cancel.png'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'
import React from 'react'
import { Link } from 'react-router-dom';

import earth from './earth2.png';
import './components/navbar.css'

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './components/news.css';
import Error404 from './components/Error404';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [newsLanguage, setNewsLanguage] = useState('english');
  const handleNewsLanguage = (event) => {
    setNewsLanguage(event.target.value)

  }
  useEffect(() => { }, [])
  return (

    <div className='navbar'>

      <div className="nav-brand-logo">
        <Link to="/" className='navbar-brand-logo-link'>
          <img src={earth} className='nav-logo' alt="logo" />
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

          <Link className='list-item' to='science'>
            science
          </Link>
        </li>
        <li>

          <Link className='list-item' to='world'>
            world
          </Link>
        </li>

      </ul>


      <div className='navbar-mobile' >

        <img id='navbar-toggle' className='navbar-toggle'
          src={toggle ? cancel : ham} alt='menu'
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

              <Link to='science' className='navbar-list-mobile-link' >
                science
              </Link>
            </li>
            <li className='navbar-list-mobile-item'>

              <Link to='world' className='navbar-list-mobile-link' >
                world
              </Link>
            </li>

          </ul>
        </div>

      </div>

    </div>
  )
}

const NewsArticles = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [error, setError] = useState('')
  const location = useLocation();
  const fetchData = async (categoryValue) => {
    try {
      let url = `https://gnews.io/api/v4/top-headlines?category=${categoryValue}&max=20&lang=hi&apikey=1af1d257ff0ae5d5d59ec47ec5ddaa1f`;
      const response = await axios.get(url);
      console.log(response.data.articles)
      setNewsArticles(response.data.articles);

    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  }
  useEffect(() => {
    const categoryValue = location.pathname.substring(1) || 'general'
    // fetchData(categoryValue || 'general');
    fetchData(categoryValue)
  }, [location])

  if (error) {
    return (
      <div className='image-container'>
        <img className='responsive-image' src={error403} alt='e403' />

      </div>
    )

  }
  return (
    <>
      {
        newsArticles.map(article => <NewsArticle key={uuidv4()} article={article} />)
      }

    </>
  )

}

const NewsArticle = ({ article }) => {
  // if (!article) {
  //   // If article data is missing or undefined, display an error message or fallback UI
  //   return <div className="error-message">Error: Unable to load article.</div>;
  // }

  if (!article) {
    // If article data is missing or undefined, display a modern fallback UI
    return (
      // <div className="fallback-ui">
      //   <img src="/placeholder-image.png" alt="Placeholder" className="fallback-image" />
      //   <h2 className="fallback-title">Article Title</h2>
      //   <p className="fallback-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
      // </div>
      <div className="loading-card">
        <div className="loading-card-image"></div>
        <div className="loading-card-content">
          <div className="loading-card-title"></div>
          <div className="loading-card-description"></div>
          <div className="loading-card-button"></div>
        </div>
      </div>
    );
  }

  const { title, content, source, description, author, publishedAt, url, image } = article;

  return (
    <div className="news-article">
      {image && (
        <img src={image} alt={title} className="article-image" />
      )}

      <h2 className="article-title">{title}</h2>
      {author && <p className="article-author">By {author}</p>}
      {publishedAt && (
        <p className="article-date">
          By {source.name} | updated at: {new Date(publishedAt).toDateString()} {publishedAt.substring(11, 19)}
        </p>
      )}
      <p className="article-description">{description}</p>
      <p>{content}  <a href={url} target="_blank" rel="noopener noreferrer">
        Read More
      </a></p>

    </div>
  );
};
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
function App() {

  return (
    <Router>
      <div >
        <Navbar />
        <Routes>
          <Route path='/' element={<NewsArticles />} />
          <Route path="/nation" element={<NewsArticles />} />
          <Route path="/health" element={<NewsArticles />} />
          <Route path="/business" element={<NewsArticles />} />
          <Route path="/tech" element={<NewsArticles />} />
          <Route path="/world" element={<NewsArticles />} />
          <Route path="/science" element={<NewsArticles />} />
          <Route path='*' element={<Error404/>} />

        </Routes>
        <Footer />


        {/* <NewsArticles /> */}



      </div>

    </Router>
  );
}

export default App;
