import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AdviceCard from '../Component/AdviceCard';
import './AdviceArticle.css';

const AdviceArticle = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/careerAdvice.json')
      .then((r) => r.json())
      .then(setData)
      .catch((e) => console.error(e));
  }, []);

  if (!data) return <div className="advice-loading">Loading…</div>;

  const article = data.articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="advice-article-page">
        <div className="container advice-not-found">
          <h1>Article not found</h1>
          <Link to="/career-advice" className="advice-view-all">← Back to Career Advice</Link>
        </div>
      </div>
    );
  }

  const related = data.articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="advice-article-page">
      <section className="advice-article-hero">
        <div className="container">
          <nav className="advice-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/career-advice">Career Advice</Link>
            <span>/</span>
            <Link to={`/career-advice/category/career/${article.category}`}>{article.categoryName}</Link>
          </nav>
          <h1 className="advice-article-title">{article.title}</h1>
          <div className="advice-article-meta">
            <img src={article.authorImage} alt={article.author} className="advice-article-avatar" />
            <div>
              <span className="advice-article-author">{article.author}</span>
              <span className="advice-article-meta-sub">
                {new Date(article.date).toLocaleDateString('en-AU', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })} · {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className="advice-article-body container">
        <img src={article.image} alt={article.title} className="advice-article-image" />
        <p className="advice-article-lead">{article.excerpt}</p>
        {article.content.map((p, i) => (
          <p key={i} className="advice-article-paragraph">{p}</p>
        ))}

        {article.tags?.length > 0 && (
          <div className="advice-article-tags">
            {article.tags.map((t) => (
              <span key={t} className="advice-tag">#{t}</span>
            ))}
          </div>
        )}
      </article>

      {related.length > 0 && (
        <section className="advice-related">
          <div className="container">
            <h2 className="advice-section-heading">Related Articles</h2>
            <div className="advice-grid">
              {related.map((a) => <AdviceCard key={a.slug} article={a} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AdviceArticle;