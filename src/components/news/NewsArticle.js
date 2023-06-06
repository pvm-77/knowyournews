import React from 'react';
import './news.css';
// const NewsArticle = ({ article }) => {
//     if (!article) {
//         // If article data is missing or undefined, display an error message or fallback UI
//         return <div className="error-message">Error: Unable to load article.</div>;
//     }
// 
//     const { title, content, source, description, author, publishedAt, url, image } = article;
// 
//     return (
//         <div className="news-article">
//             {image && (
//                 <img src={image} alt={title} className="article-image" />
//             )}
// 
//             <h2 className="article-title">{title}</h2>
//             {author && <p className="article-author">By {author}</p>}
//             {publishedAt && (
//                 <p className="article-date">
//                     By {source.name} | updated at: {new Date(publishedAt).toDateString()} {publishedAt.substring(11, 19)}
//                 </p>
//             )}
//             <p className="article-description">{description}</p>
//             <p>{content}  <a href={url} target="_blank" rel="noopener noreferrer">
//                 Read More
//             </a></p>
// 
//         </div>
//     );
// };

const NewsArticle = ({ article }) => {
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

export default NewsArticle;
