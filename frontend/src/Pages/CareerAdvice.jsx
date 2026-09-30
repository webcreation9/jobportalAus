import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdviceCard from '../Component/AdviceCard';
import CategoryPills from '../Component/CategoryPills';
import './CareerAdvice.css';

const CareerAdvice = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/careerAdvice.json')
      .then((r) => r.json())
      .then(setData)
      .catch((e) => console.error('Failed to load career advice data', e));
  }, []);

  if (!data) return <div className="advice-loading">Loading career advice…</div>;

  const featured = data.articles.find((a) => a.featured) || data.articles[0];
  const rest = data.articles.filter((a) => a.slug !== featured.slug);
  const popular = [...data.articles].slice(0, 4);

  return (
    <div className="career-advice-page">
      {/* Hero */}
      <section className="advice-hero">
        <div className="container">
          <h1 className="advice-hero-title">Career Advice</h1>
          <p className="advice-hero-subtitle">
            Expert tips, guides, and insights to help you find, apply, and grow in your Australian career.
          </p>

          <div className="advice-search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="Search career advice…" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="advice-categories">
        <div className="container">
          <h2 className="advice-section-heading">Browse by Category</h2>
          <CategoryPills categories={data.categories} />
        </div>
      </section>

      {/* Featured */}
      <section className="advice-featured">
        <div className="container">
          <h2 className="advice-section-heading">Featured Article</h2>
          <AdviceCard article={featured} featured />
        </div>
      </section>

      {/* Latest */}
      <section className="advice-latest">
        <div className="container">
          <div className="advice-section-header">
            <h2 className="advice-section-heading">Latest Articles</h2>
            <Link to="/career-advice/category/career/career" className="advice-view-all">
              View all →
            </Link>
          </div>
          <div className="advice-grid">
            {rest.map((a) => (
              <AdviceCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular */}
      <section className="advice-popular">
        <div className="container">
          <h2 className="advice-section-heading">Popular Right Now</h2>
          <div className="advice-popular-list">
            {popular.map((a, i) => (
              <Link
                key={a.slug}
                to={`/career-advice/article/${a.slug}`}
                className="advice-popular-item"
              >
                <span className="advice-popular-index">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h4>{a.title}</h4>
                  <span className="advice-popular-meta">{a.categoryName} · {a.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerAdvice;