import React from 'react';
import { useState, useEffect } from 'react';
import { logo403 } from '../../assets'
import NewsArticle from './NewsArticle';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';
import newsService from '../../api/news';
const NewsArticles = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [error, setError] = useState('')
  const location = useLocation();
  const getData = async (categoryValue) => {
    try {
      const response = await newsService.fetchData(categoryValue)
      setNewsArticles(response.articles);
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  }
  useEffect(() => {
    const categoryValue = location.pathname.substring(1) || 'general';
    getData(categoryValue)
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