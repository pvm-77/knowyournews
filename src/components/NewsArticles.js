import React from 'react'
import NewsArticle from './NewsArticle'
const NewsArticles = ({ articles }) => {
    return (
        <div>
            {
                articles.map(article => <NewsArticle key={article.id} article={article} />)
            }
        </div>
    )
}

export default NewsArticles