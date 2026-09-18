import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import heroImage from '../assets/Website image.jpeg';

// ===== Typing Text Component =====
const TypingText = ({ words, typingSpeed = 150, deletingSpeed = 80, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Longest word determines the reserved width (prevents layout shift)
  const longestWord = words.reduce(
    (a, b) => (b.length > a.length ? b : a),
    ''
  );

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        } else {
          // Finished typing — wait, then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting backward
        if (displayText.length > 0) {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="typing-wrap">
      {/* Invisible sizer reserves exact width of the longest word */}
      <span className="typing-sizer" aria-hidden="true">{longestWord}</span>
      <span className="highlight-blue typing-text">{displayText}</span>
    </span>
  );
};

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Auto-play effect
  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    const interval = setInterval(play, 3500);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Scroll active card into view
  useEffect(() => {
    if (carouselRef.current) {
      const cards = carouselRef.current.children;
      if (cards[activeIndex]) {
        const card = cards[activeIndex];
        const container = carouselRef.current;
        const scrollLeft =
          card.offsetLeft -
          container.offsetWidth / 2 +
          card.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeIndex]);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img 
          src={heroImage} 
          alt="Hero banner" 
          className="hero-image"
        />
        
        {/* Text Overlay */}
        <div className="hero-content"> 
          <h2 className="hero-subtitle">Find Your</h2>
          <h1 className="hero-title">
            Dream Job in{' '}
            <TypingText 
              words={['Australia']} 
              typingSpeed={150}
              deletingSpeed={80}
              pauseTime={2000}
            />
          </h1>
          <p className="hero-description">
            Discover thousands of verified jobs across Australia. Connect with top employers, 
            explore career opportunities and apply instantly with a smarter job search experience.
          </p>

          {/* Search Bar */}
          <div className="search-container">
            <div className="search-bar">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Job title or company"
              />
              <button className="search-btn">Search Jobs</button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <div className="feature-text">
                <h4>Upload Resume</h4>
                <p>Get noticed by employers</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <div className="feature-text">
                <h4>Post a Job</h4>
                <p>Hire the best talent</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories & Job Types Section (side by side) */}
      <section className="explore-section">
        <div className="container">
          <div className="explore-grid">
            {/* Left: Categories */}
            <div className="explore-card">
              <div className="section-header">
                <h2 className="section-title">Explore Jobs by Category</h2>
                <a href="/categories" className="view-all">View All Categories →</a>
              </div>

              <div className="categories-grid">
                {categoriesData.map((category, index) => (
                  <div 
                    key={index} 
                    className="category-card"
                    style={{ '--accent-color': category.color }}
                  >
                    <div 
                      className="category-icon"
                      style={{ color: category.color, background: `${category.color}15` }}
                    >
                      {category.icon}
                    </div>
                    <span className="category-name">{category.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Job Types */}
            <div className="explore-card">
              <div className="section-header">
                <h2 className="section-title">Browse Jobs by Type</h2>
                <a href="/job-types" className="view-all">View All Types →</a>
              </div>

              <div className="job-types-list">
                {jobTypesData.map((type, index) => (
                  <div 
                    key={index} 
                    className="job-type-row"
                    style={{ '--accent-color': type.color }}
                  >
                    <div 
                      className="job-type-icon"
                      style={{ color: type.color, background: `${type.color}15` }}
                    >
                      {type.icon}
                    </div>
                    <span className="job-type-name">{type.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Employers Section */}
      <section className="employers-section">
        <div className="container">
          <h2 className="employers-title">Trusted by Australia's Leading Employers</h2>
          <div className="employers-grid">
            {employersData.map((employer, index) => (
              <div key={index} className="employer-logo">
                <img src={employer.logo} alt={employer.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">Real people, real career breakthroughs</p>
          </div>

          <div className="stories-carousel-wrapper">
            <div className="stories-carousel" ref={carouselRef}>
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="story-card">
                  <div className="story-quote-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                    </svg>
                  </div>
                  <p className="story-text">"{testimonial.quote}"</p>
                  <div className="story-author">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="story-avatar"
                    />
                    <div className="story-author-info">
                      <h4 className="story-name">{testimonial.name}</h4>
                      <p className="story-designation">{testimonial.designation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="carousel-dots">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${activeIndex === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Data for categories (with color accents)
const categoriesData = [
  { 
    name: 'Information Technology', 
    color: '#3b82f6',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="8" y1="2" x2="8" y2="22"/><line x1="16" y1="2" x2="16" y2="22"/><line x1="2" y1="8" x2="22" y2="8"/><line x1="2" y1="16" x2="22" y2="16"/></svg> 
  },
  { 
    name: 'Accounting & Finance', 
    color: '#10b981',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg> 
  },
  { 
    name: 'Logistics & Transport', 
    color: '#f59e0b',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg> 
  },
  { 
    name: 'Agriculture Jobs', 
    color: '#84cc16',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 6v4M8 8l4-4 4 4M12 22v-8M6 14l2-4h8l2 4"/></svg> 
  },
  { 
    name: 'Healthcare & Nursing', 
    color: '#ef4444',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> 
  },
  { 
    name: 'Tourism', 
    color: '#06b6d4',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> 
  },
  { 
    name: 'Retail Jobs', 
    color: '#ec4899',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> 
  },
  { 
    name: 'Government Jobs', 
    color: '#8b5cf6',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> 
  },
  { 
    name: 'Engineering', 
    color: '#0ea5e9',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> 
  },
  { 
    name: 'Education & Training', 
    color: '#f97316',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.5 3 2.5 6 2.5s6-1 6-2.5v-5"/></svg> 
  },
  { 
    name: 'Administration', 
    color: '#64748b',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 6.5L12 2 2 6.5l10 4.5 10-4.5zM2 6.5V12M22 6.5V12"/><path d="M12 22V11"/><path d="M7 16l5 2 5-2"/></svg> 
  },
  { 
    name: 'Remote/WFH Jobs', 
    color: '#14b8a6',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> 
  },
  { 
    name: 'Construction', 
    color: '#eab308',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="12" width="20" height="10" rx="2"/><path d="M8 12V8l4-4 4 4v4"/></svg> 
  },
  { 
    name: 'Sales & Marketing', 
    color: '#d946ef',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12h-4l-3 9-4-18-3 9H3"/></svg> 
  },
  { 
    name: 'Internships', 
    color: '#6366f1',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> 
  }
];

// Data for job types (with color accents)
const jobTypesData = [
  { name: 'Full Time', color: '#3b82f6', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> },
  { name: 'Part Time', color: '#f59e0b', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> },
  { name: 'Casual', color: '#84cc16', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 6v4M8 8l4-4 4 4M12 22v-8M6 14l2-4h8l2 4"/></svg> },
  { name: 'Contract', color: '#8b5cf6', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { name: 'Temporary', color: '#f97316', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { name: 'Remote', color: '#14b8a6', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { name: 'Hybrid', color: '#06b6d4', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 6v4M8 8l4-4 4 4"/><path d="M4 14l4-4 4 4"/><path d="M4 18l4-4 4 4"/><path d="M12 14v8"/></svg> },
  { name: 'Weekend', color: '#ec4899', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/></svg> },
  { name: 'Internship Programs', color: '#6366f1', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> },
  { name: 'Visa Sponsored', color: '#10b981', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> }
];

// Data for employers (using placeholder images - replace with actual logos)
const employersData = [
  { name: 'SEEK', logo: 'https://via.placeholder.com/150x60/0066cc/ffffff?text=SEEK' },
  { name: 'BHP', logo: 'https://via.placeholder.com/150x60/ff6600/ffffff?text=BHP' },
  { name: 'DHL', logo: 'https://via.placeholder.com/150x60/ffcc00/ffffff?text=DHL' },
  { name: 'Medibank', logo: 'https://via.placeholder.com/150x60/0055aa/ffffff?text=MEDIBANK' },
  { name: 'Coles', logo: 'https://via.placeholder.com/150x60/ff0000/ffffff?text=COLES' },
  { name: 'Telstra', logo: 'https://via.placeholder.com/150x60/0099cc/ffffff?text=TELSTRA' }
];

// Data for testimonials (9 boxes)
const testimonialsData = [
  {
    quote: "I found my first IT job in Melbourne within two weeks! The platform is very easy to use.",
    name: "Sarah Mitchell",
    designation: "Software Developer at TechCorp",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "After months of searching, I landed my dream nursing role in Sydney. Amazing experience!",
    name: "James Chen",
    designation: "Registered Nurse at Sydney Health",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The visa sponsorship filter helped me find the perfect engineering job in Brisbane.",
    name: "Priya Sharma",
    designation: "Civil Engineer at BuildRight",
    image: "https://randomuser.me/api/portraits/women/68.jpg" 
  },
  {
    quote: "From application to offer letter in just 10 days. This platform truly delivers!",
    name: "Michael O'Brien",
    designation: "Marketing Manager at BrandWave",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    quote: "I relocated from overseas and found a great accounting position in Perth effortlessly.",
    name: "Emily Watson",
    designation: "Senior Accountant at FinEdge",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    quote: "The remote job listings are fantastic. I now work from home for an Australian company.",
    name: "David Kumar",
    designation: "UX Designer at RemoteFirst",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    quote: "Found a casual hospitality job in Gold Coast within days. Perfect for my gap year!",
    name: "Olivia Brown",
    designation: "Hospitality Staff at BeachResort",
    image: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    quote: "The construction jobs here are legit and well-paid. Highly recommend to all tradies!",
    name: "Liam Taylor",
    designation: "Site Supervisor at BuildPro",
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    quote: "As a fresh graduate, I got my first teaching role in Adelaide. Thank you for this platform!",
    name: "Sophia Nguyen",
    designation: "Primary Teacher at EduCare",
    image: "https://randomuser.me/api/portraits/women/25.jpg"
  }
];  

export default Home;