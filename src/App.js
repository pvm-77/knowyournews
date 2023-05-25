
import './App.css';
import NewsArticle from './components/NewsArticle';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  const [newsArticle, setNewsArticle] = useState([]);
  const [category, setCategory] = useState([]);

  // fetch data here
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://gnews.io/api/v4/top-headlines?category=health&max=20&lang=hi&apikey=ec8a1df338cca376771ebd8085a4494f')
      .then(response => {
        console.log('promise fulfilled');
        console.log(response.data.articles)
        setNewsArticle(response.data.articles);

      })


  }, []);
  console.log('render', newsArticle.length, 'articles')
  return (

    <Router>
      <div >
        <Navbar />
        <Routes>
          <Route path='/' element={<NewsArticle />} />
          <Route path="/nation" element={<NewsArticle />} />
          <Route path="/health" element={<NewsArticle />} />
        </Routes>


        {newsArticle.map(article => <NewsArticle article={article} />)}
        {/* <NewsArticle/> */}
      </div>

    </Router>
  );
}

export default App;
