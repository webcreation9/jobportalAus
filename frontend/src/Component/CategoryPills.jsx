import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryPills.css';

const CategoryPills = ({ categories, activeSlug, allLink = '/career-advice' }) => {
  return (
    <div className="category-pills">
      <Link
        to={allLink}
        className={`category-pill ${!activeSlug ? 'active' : ''}`}
      >
        All
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          to={`/career-advice/category/career/${cat.slug}`}
          className={`category-pill ${activeSlug === cat.slug ? 'active' : ''}`}
          style={{ '--pill-color': cat.color }}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryPills;