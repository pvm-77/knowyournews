import React from 'react';
import './news.css'
const NewsArticle = ({ article }) => {
    if (!article) {
        // If article data is missing or undefined, display an error message or fallback UI
        return <div className="error-message">Error: Unable to load article.</div>;
    }

    const { title, description, author, publishedAt, url, image } = article;

    return (
        <div className="news-article">
            {image && (
                <img src={image} alt={title} className="article-image" />
            )}
            <h2 className="article-title">{title}</h2>
            {author && <p className="article-author">By {author}</p>}
            {publishedAt && (
                <p className="article-date">
                    Published on {new Date(publishedAt).toDateString()}
                </p>
            )}
            <p className="article-description">{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
                Read More
            </a>
        </div>
    );
};

export default NewsArticle;
