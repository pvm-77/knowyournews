import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {logo403} from '../../assets'
import NewsArticle from './NewsArticle';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';
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
          <img className='responsive-image' src={logo403} alt='e403' />
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

export default NewsArticles