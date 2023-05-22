import logo from './logo.svg';
import './App.css';
import NewsArticle from './components/NewsArticle';
import { useState,useEffect } from 'react';
import axios from 'axios';
function App() {

  const [newsArticle,setNewsArticle]=useState([]);

  // fetch data here
  useEffect(() => {
    console.log('effect')
    axios
    .get('https://gnews.io/api/v4/top-headlines?category=general&max=3&lang=hi&apikey=ec8a1df338cca376771ebd8085a4494f')
    .then(response=>{
      console.log('promise fulfilled');
      console.log(response.data.articles)
      setNewsArticle(response.data.articles);

    })

   
  }, []);
  console.log('render',newsArticle.length,'articles')
  return (
    <div className="App">{
        <h1>react news app</h1>
    }
    {newsArticle.map(article=><NewsArticle article={article}/>)}
     {/* <NewsArticle/> */}
    </div>
  );
}

export default App;
