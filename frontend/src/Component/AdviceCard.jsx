import React from 'react';
import { Link } from 'react-router-dom';
import './AdviceCard.css';

const AdviceCard = ({ article, featured = false }) => {
  return (
    <Link
      to={`/career-advice/article/${article.slug}`}
      className={`advice-card ${featured ? 'advice-card-featured' : ''}`}
    >
      <div className="advice-card-image-wrap">
        <img src={article.image} alt={article.title} className="advice-card-image" loading="lazy" />
        <span className="advice-card-category">{article.categoryName}</span>
      </div>
      <div className="advice-card-body">
        <h3 className="advice-card-title">{article.title}</h3>
        <p className="advice-card-excerpt">{article.excerpt}</p>
        <div className="advice-card-meta">
          <img src={article.authorImage} alt={article.author} className="advice-card-avatar" />
          <div className="advice-card-meta-text">
            <span className="advice-card-author">{article.author}</span>
            <span className="advice-card-dot">·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AdviceCard;