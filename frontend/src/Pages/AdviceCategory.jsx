import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AdviceCard from '../Component/AdviceCard';
import CategoryPills from '../Component/CategoryPills';
import './AdviceCategory.css';

const AdviceCategory = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/careerAdvice.json')
      .then((r) => r.json())
      .then(setData)
      .catch((e) => console.error(e));
  }, []);

  if (!data) return <div className="advice-loading">Loading…</div>;

  const category = data.categories.find((c) => c.slug === slug);
  const articles = data.articles.filter((a) => a.category === slug);

  return (
    <div className="advice-category-page">
      <section className="advice-category-hero">
        <div className="container">
          <nav className="advice-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/career-advice">Career Advice</Link>
            <span>/</span>
            <span className="current">{category?.name || slug}</span>
          </nav>
          <h1 className="advice-category-title">
            {category?.name || 'Category'} Advice
          </h1>
          <p className="advice-category-subtitle">
            {articles.length} article{articles.length !== 1 ? 's' : ''} to help you move forward.
          </p>
        </div>
      </section>

      <section className="advice-category-body">
        <div className="container">
          <CategoryPills categories={data.categories} activeSlug={slug} />

          {articles.length === 0 ? (
            <p className="advice-empty">No articles in this category yet. Check back soon.</p>
          ) : (
            <div className="advice-grid">
              {articles.map((a) => (
                <AdviceCard key={a.slug} article={a} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdviceCategory;