import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error404 from './components/error/Error404';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import NewsArticles from './components/news/NewsArticles';
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
      </div>
    </Router>
  );
}

export default App;
