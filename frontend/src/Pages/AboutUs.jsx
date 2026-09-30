// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import './AboutUs.css';

// // ===== Animated Counter Component =====
// const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(null);
//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !hasAnimated) {
//             setHasAnimated(true);
//             let startTime = null;
//             const animate = (timestamp) => {
//               if (!startTime) startTime = timestamp;
//               const progress = Math.min((timestamp - startTime) / duration, 1);
//               setCount(Math.floor(progress * end));
//               if (progress < 1) {
//                 requestAnimationFrame(animate);
//               }
//             };
//             requestAnimationFrame(animate);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     if (countRef.current) {
//       observer.observe(countRef.current);
//     }

//     return () => observer.disconnect();
//   }, [end, duration, hasAnimated]);

//   return (
//     <span ref={countRef} className="counter-value">
//       {count.toLocaleString()}{suffix}
//     </span>
//   );
// };

// // ===== Fade In Section Component =====
// const FadeInSection = ({ children, delay = 0 }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const domRef = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setTimeout(() => setIsVisible(true), delay);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (domRef.current) {
//       observer.observe(domRef.current);
//     }

//     return () => observer.disconnect();
//   }, [delay]);

//   return (
//     <div
//       ref={domRef}
//       className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
//     >
//       {children}
//     </div>
//   );
// };

// const AboutUs = () => {
//   const [activeValue, setActiveValue] = useState(0);

//   const values = [
//     {
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//         </svg>
//       ),
//       title: 'Trust & Integrity',
//       description: 'We connect job seekers with verified employers, ensuring every opportunity is legitimate and transparent.'
//     },
//     {
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <circle cx="12" cy="12" r="10" />
//           <path d="M12 6v6l4 2" />
//         </svg>
//       ),
//       title: 'Empowerment',
//       description: 'We provide the tools, resources, and guidance Australians need to take control of their career journey.'
//     },
//     {
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//           <circle cx="9" cy="7" r="4" />
//           <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//           <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//         </svg>
//       ),
//       title: 'Community',
//       description: 'We build connections that strengthen Australian workplaces and support local talent development.'
//     },
//     {
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
//         </svg>
//       ),
//       title: 'Innovation',
//       description: 'We leverage smart technology to make job searching faster, easier, and more effective for everyone.'
//     }
//   ];

//   const stats = [
//     { value: 15000, suffix: '+', label: 'Active Job Listings' },
//     { value: 8500, suffix: '+', label: 'Partner Employers' },
//     { value: 120000, suffix: '+', label: 'Successful Placements' },
//     { value: 98, suffix: '%', label: 'Satisfaction Rate' }
//   ];

//   const milestones = [
//     {
//       year: '2020',
//       title: 'The Beginning',
//       description: 'Aus Careers was founded with a simple mission: make job hunting in Australia seamless and accessible for everyone.'
//     },
//     {
//       year: '2021',
//       title: 'Growing Strong',
//       description: 'Reached 1,000 partner employers and helped 10,000 Australians find meaningful employment.'
//     },
//     {
//       year: '2022',
//       title: 'Going National',
//       description: 'Expanded services across all Australian states and territories, covering every major industry sector.'
//     },
//     {
//       year: '2023',
//       title: 'Smart Matching',
//       description: 'Launched AI-powered job matching technology to connect candidates with their ideal roles faster.'
//     },
//     {
//       year: '2024',
//       title: 'Visa Support Hub',
//       description: 'Introduced dedicated resources for international talent seeking visa-sponsored positions in Australia.'
//     },
//     {
//       year: '2025',
//       title: 'The Future',
//       description: 'Continuing to innovate with remote work solutions and skills development partnerships across the nation.'
//     }
//   ];

//   return (
//     <div className="about-page">
//       {/* Hero Section */}
//       <section className="about-hero">
//         <div className="about-hero-bg">
//           <div className="hero-gradient-overlay"></div>
//           <div className="hero-pattern"></div>
//         </div>
//         <div className="about-hero-content">
//           <FadeInSection>
//             <span className="about-hero-badge">About Aus Careers</span>
//           </FadeInSection>
//           <FadeInSection delay={100}>
//             <h1 className="about-hero-title">
//               Connecting Australia's
//               <span className="highlight-text"> Workforce</span>
//               with Opportunity
//             </h1>
//           </FadeInSection>
//           <FadeInSection delay={200}>
//             <p className="about-hero-description">
//               We're on a mission to transform how Australians find work and how employers 
//               find talent. From Sydney to Perth, we're building bridges between skilled 
//               professionals and the companies that need them.
//             </p>
//           </FadeInSection>
//           <FadeInSection delay={300}>
//             <div className="about-hero-cta">
//               <Link to="/jobs" className="btn-primary">
//                 Find Jobs
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <line x1="5" y1="12" x2="19" y2="12" />
//                   <polyline points="12 5 19 12 12 19" />
//                 </svg>
//               </Link>
//               <Link to="/post-job" className="btn-secondary">
//                 Post a Job
//               </Link>
//             </div>
//           </FadeInSection>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="stats-section">
//         <div className="container">
//           <div className="stats-grid">
//             {stats.map((stat, index) => (
//               <FadeInSection key={index} delay={index * 100}>
//                 <div className="stat-card">
//                   <AnimatedCounter end={stat.value} suffix={stat.suffix} />
//                   <span className="stat-label">{stat.label}</span>
//                 </div>
//               </FadeInSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="mission-section">
//         <div className="container">
//           <div className="mission-grid">
//             <FadeInSection>
//               <div className="mission-content">
//                 <span className="section-label">Our Mission</span>
//                 <h2 className="section-heading">
//                   Empowering Careers, 
//                   <br />
//                   <span className="highlight-blue">Strengthening Industries</span>
//                 </h2>
//                 <p className="mission-text">
//                   Aus Careers exists to unlock the full potential of Australia's workforce. 
//                   We believe that every person deserves access to meaningful employment 
//                   opportunities, and every business deserves access to exceptional talent.
//                 </p>
//                 <p className="mission-text">
//                   By leveraging innovative technology and deep industry partnerships, we're 
//                   creating a more efficient, equitable, and transparent job market that 
//                   benefits everyone.
//                 </p>
//                 <div className="mission-points">
//                   <div className="mission-point">
//                     <div className="point-icon">
//                       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                         <polyline points="20 6 9 17 4 12" />
//                       </svg>
//                     </div>
//                     <span>Verified employers and job listings</span>
//                   </div>
//                   <div className="mission-point">
//                     <div className="point-icon">
//                       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                         <polyline points="20 6 9 17 4 12" />
//                       </svg>
//                     </div>
//                     <span>Free career resources and guidance</span>
//                   </div>
//                   <div className="mission-point">
//                     <div className="point-icon">
//                       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                         <polyline points="20 6 9 17 4 12" />
//                       </svg>
//                     </div>
//                     <span>Support for international talent</span>
//                   </div>
//                 </div>
//               </div>
//             </FadeInSection>
//             <FadeInSection delay={200}>
//               <div className="mission-image-wrapper">
//                 <div className="mission-image">
//                   <img 
//                     src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
//                     alt="Team collaboration"
//                   />
//                 </div>
//                 <div className="floating-card card-1">
//                   <div className="floating-card-icon">
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                       <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//                       <polyline points="22 4 12 14.01 9 11.01" />
//                     </svg>
//                   </div>
//                   <div className="floating-card-text">
//                     <strong>Verified Jobs</strong>
//                     <span>100% authentic listings</span>
//                   </div>
//                 </div>
//                 <div className="floating-card card-2">
//                   <div className="floating-card-icon">
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                       <circle cx="12" cy="12" r="10" />
//                       <path d="M12 6v6l4 2" />
//                     </svg>
//                   </div>
//                   <div className="floating-card-text">
//                     <strong>Fast Matching</strong>
//                     <span>Apply in minutes</span>
//                   </div>
//                 </div>
//               </div>
//             </FadeInSection>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="values-section">
//         <div className="container">
//           <FadeInSection>
//             <div className="section-header-center">
//               <span className="section-label">What Drives Us</span>
//               <h2 className="section-heading">Our Core Values</h2>
//               <p className="section-subheading">
//                 These principles guide everything we do and every decision we make.
//               </p>
//             </div>
//           </FadeInSection>
//           <div className="values-grid">
//             {values.map((value, index) => (
//               <FadeInSection key={index} delay={index * 100}>
//                 <div 
//                   className={`value-card ${activeValue === index ? 'active' : ''}`}
//                   onMouseEnter={() => setActiveValue(index)}
//                   onMouseLeave={() => setActiveValue(-1)}
//                 >
//                   <div className="value-icon">{value.icon}</div>
//                   <h3 className="value-title">{value.title}</h3>
//                   <p className="value-description">{value.description}</p>
//                 </div>
//               </FadeInSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <section className="timeline-section">
//         <div className="container">
//           <FadeInSection>
//             <div className="section-header-center">
//               <span className="section-label">Our Journey</span>
//               <h2 className="section-heading">Milestones That Shaped Us</h2>
//               <p className="section-subheading">
//                 From a simple idea to Australia's trusted job platform.
//               </p>
//             </div>
//           </FadeInSection>
//           <div className="timeline">
//             <div className="timeline-line"></div>
//             {milestones.map((milestone, index) => (
//               <FadeInSection key={index} delay={index * 100}>
//                 <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
//                   <div className="timeline-dot"></div>
//                   <div className="timeline-content">
//                     <span className="timeline-year">{milestone.year}</span>
//                     <h3 className="timeline-title">{milestone.title}</h3>
//                     <p className="timeline-description">{milestone.description}</p>
//                   </div>
//                 </div>
//               </FadeInSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="team-section">
//         <div className="container">
//           <FadeInSection>
//             <div className="section-header-center">
//               <span className="section-label">Our People</span>
//               <h2 className="section-heading">Meet the Team Behind Aus Careers</h2>
//               <p className="section-subheading">
//                 A diverse group of passionate professionals dedicated to connecting Australians with opportunity.
//               </p>
//             </div>
//           </FadeInSection>
//           <div className="team-grid">
//             {[
//               { name: 'Alexandra Thompson', role: 'Chief Executive Officer', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
//               { name: 'Marcus Chen', role: 'Chief Technology Officer', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
//               { name: 'Sarah Williams', role: 'Head of Partnerships', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
//               { name: 'David Okafor', role: 'Head of Customer Success', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
//             ].map((member, index) => (
//               <FadeInSection key={index} delay={index * 100}>
//                 <div className="team-card">
//                   <div className="team-image-wrapper">
//                     <img src={member.image} alt={member.name} className="team-image" />
//                     <div className="team-social">
//                       <a href="#" aria-label="LinkedIn">
//                         <svg viewBox="0 0 24 24" fill="currentColor">
//                           <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                         </svg>
//                       </a>
//                       <a href="#" aria-label="Twitter">
//                         <svg viewBox="0 0 24 24" fill="currentColor">
//                           <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1a10.66 10.66 0 0 1-9-4.35s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
//                         </svg>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="team-info">
//                     <h3 className="team-name">{member.name}</h3>
//                     <p className="team-role">{member.role}</p>
//                   </div>
//                 </div>
//               </FadeInSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta-section">
//         <div className="container">
//           <FadeInSection>
//             <div className="cta-content">
//               <h2 className="cta-title">Ready to Start Your Journey?</h2>
//               <p className="cta-description">
//                 Whether you're looking for your next opportunity or searching for the perfect candidate, 
//                 Aus Careers is here to help.
//               </p>
//               <div className="cta-buttons">
//                 <Link to="/jobs" className="btn-primary-large">
//                   Browse Jobs
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <line x1="5" y1="12" x2="19" y2="12" />
//                     <polyline points="12 5 19 12 12 19" />
//                   </svg>
//                 </Link>
//                 <Link to="/contact" className="btn-secondary-large">
//                   Contact Us
//                 </Link>
//               </div>
//             </div>
//           </FadeInSection>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

// ===== Animated Counter Component =====
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTime = null;
            const animate = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              setCount(Math.floor(progress * end));
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={countRef} className="counter-value">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

// ===== Fade In Section Component =====
const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};

const AboutUs = () => {
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Trust & Integrity',
      description: 'We connect job seekers with verified employers, ensuring every opportunity is legitimate and transparent.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: 'Empowerment',
      description: 'We provide the tools, resources, and guidance Australians need to take control of their career journey.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Community',
      description: 'We build connections that strengthen Australian workplaces and support local talent development.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'We leverage smart technology to make job searching faster, easier, and more effective for everyone.'
    }
  ];

  const stats = [
    { value: 15000, suffix: '+', label: 'Active Job Listings' },
    { value: 8500, suffix: '+', label: 'Partner Employers' },
    { value: 120000, suffix: '+', label: 'Successful Placements' },
    { value: 98, suffix: '%', label: 'Satisfaction Rate' }
  ];
  const milestones = [
  {
    year: '2026',
    title: 'The Beginning',
    tag: 'Chapter 01',
    description: 'Aus Careers was born in 2026 with a bold vision — to redefine how Australians discover work and how employers discover talent. Every great journey starts with a single step.'
  },
  {
    year: '2026',
    title: 'First 100 Employers',
    tag: 'Chapter 02',
    description: 'Within our launch year, we partnered with 100+ verified Australian employers who trusted us to help them find the right talent across industries.'
  },
  {
    year: '2026',
    title: 'Nationwide Reach',
    tag: 'Chapter 03',
    description: 'Expanded our services across all Australian states and territories — from Sydney to Perth — connecting candidates with opportunities in every major sector.'
  },
  {
    year: '2026',
    title: 'Smart AI Matching',
    tag: 'Chapter 04',
    description: 'Launched our AI-powered job matching engine to instantly connect candidates with roles that truly fit their skills, goals, and lifestyle.'
  },
  {
    year: '2026',
    title: 'Visa Talent Hub',
    tag: 'Chapter 05',
    description: 'Introduced dedicated resources for international talent seeking visa-sponsored positions — making Australia more accessible to global professionals.'
  },
  {
    year: '2026',
    title: 'The Future Starts Now',
    tag: 'Chapter 06',
    description: 'This is just the beginning. We are building the future of work in Australia — smarter, fairer, and more connected than ever before.'
  }
];

  // const milestones = [
  //   {
  //     year: '2020',
  //     title: 'The Beginning',
  //     description: 'Aus Careers was founded with a simple mission: make job hunting in Australia seamless and accessible for everyone.'
  //   },
  //   {
  //     year: '2021',
  //     title: 'Growing Strong',
  //     description: 'Reached 1,000 partner employers and helped 10,000 Australians find meaningful employment.'
  //   },
  //   {
  //     year: '2022',
  //     title: 'Going National',
  //     description: 'Expanded services across all Australian states and territories, covering every major industry sector.'
  //   },
  //   {
  //     year: '2023',
  //     title: 'Smart Matching',
  //     description: 'Launched AI-powered job matching technology to connect candidates with their ideal roles faster.'
  //   },
  //   {
  //     year: '2024',
  //     title: 'Visa Support Hub',
  //     description: 'Introduced dedicated resources for international talent seeking visa-sponsored positions in Australia.'
  //   },
  //   {
  //     year: '2025',
  //     title: 'The Future',
  //     description: 'Continuing to innovate with remote work solutions and skills development partnerships across the nation.'
  //   }
  // ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <div className="hero-gradient-overlay"></div>
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
          <div className="hero-grid-pattern"></div>
          <div className="hero-noise"></div>
        </div>
        <div className="about-hero-content">
          <FadeInSection>
            <span className="about-hero-badge">
              <span className="badge-dot"></span>
              About Aus Careers
            </span>
          </FadeInSection>
          <FadeInSection delay={100}>
            <h1 className="about-hero-title">
              Connecting Australia's
              <span className="highlight-text"> Workforce</span>
              <br />
              with Opportunity
            </h1>
          </FadeInSection>
          <FadeInSection delay={200}>
            <p className="about-hero-description">
              We're on a mission to transform how Australians find work and how employers 
              find talent. From Sydney to Perth, we're building bridges between skilled 
              professionals and the companies that need them.
            </p>
          </FadeInSection>
          <FadeInSection delay={300}>
            <div className="about-hero-cta">
              <Link to="/jobs" className="btn-primary">
                Find Jobs
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link to="/post-job" className="btn-secondary">
                Post a Job
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="stat-card">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  <span className="stat-label">{stat.label}</span>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <FadeInSection>
              <div className="mission-content">
                <span className="section-label">Our Mission</span>
                <h2 className="section-heading">
                  Empowering Careers, 
                  <br />
                  <span className="highlight-blue">Strengthening Industries</span>
                </h2>
                <p className="mission-text">
                  Aus Careers exists to unlock the full potential of Australia's workforce. 
                  We believe that every person deserves access to meaningful employment 
                  opportunities, and every business deserves access to exceptional talent.
                </p>
                <p className="mission-text">
                  By leveraging innovative technology and deep industry partnerships, we're 
                  creating a more efficient, equitable, and transparent job market that 
                  benefits everyone.
                </p>
                <div className="mission-points">
                  <div className="mission-point">
                    <div className="point-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Verified employers and job listings</span>
                  </div>
                  <div className="mission-point">
                    <div className="point-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Free career resources and guidance</span>
                  </div>
                  <div className="mission-point">
                    <div className="point-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Support for international talent</span>
                  </div>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="mission-image-wrapper">
                <div className="mission-image">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                    alt="Team collaboration"
                  />
                </div>
                <div className="floating-card card-1">
                  <div className="floating-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div className="floating-card-text">
                    <strong>Verified Jobs</strong>
                    <span>100% authentic listings</span>
                  </div>
                </div>
                <div className="floating-card card-2">
                  <div className="floating-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div className="floating-card-text">
                    <strong>Fast Matching</strong>
                    <span>Apply in minutes</span>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <FadeInSection>
            <div className="section-header-center">
              <span className="section-label">What Drives Us</span>
              <h2 className="section-heading">Our Core Values</h2>
              <p className="section-subheading">
                These principles guide everything we do and every decision we make.
              </p>
            </div>
          </FadeInSection>
          <div className="values-grid">
            {values.map((value, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div 
                  className={`value-card ${activeValue === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveValue(index)}
                  onMouseLeave={() => setActiveValue(-1)}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="timeline-section">
        <div className="container">
          <FadeInSection>
            <div className="section-header-center">
              <span className="section-label">Our Journey</span>
              <h2 className="section-heading">Milestones That Shaped Us</h2>
              <p className="section-subheading">
                From a simple idea to Australia's trusted job platform.
              </p>
            </div>
          </FadeInSection>
          <div className="timeline">
            <div className="timeline-line"></div>
            {milestones.map((milestone, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">{milestone.year}</span>
                    <h3 className="timeline-title">{milestone.title}</h3>
                    <p className="timeline-description">{milestone.description}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section> */}
      {/* Timeline Section */}
<section className="timeline-section">
  <div className="container">
    <FadeInSection>
      <div className="section-header-center">
        <span className="section-label">Our Journey</span>
        <h2 className="section-heading">
          Where It All <span className="highlight-blue">Begins</span>
        </h2>
        <p className="section-subheading">
          2026 marks the start of a new era — Aus Careers is live, and the future of work in Australia starts here.
        </p>
      </div>
    </FadeInSection>

    <div className="timeline">
      <div className="timeline-line"></div>
      <div className="timeline-progress"></div>

      {milestones.map((milestone, index) => (
        <FadeInSection key={index} delay={index * 100}>
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot">
              <span className="timeline-dot-pulse"></span>
            </div>
            <div className="timeline-content">
              <span className="timeline-tag">{milestone.tag}</span>
              <span className="timeline-year">{milestone.year}</span>
              <h3 className="timeline-title">{milestone.title}</h3>
              <p className="timeline-description">{milestone.description}</p>
            </div>
          </div>
        </FadeInSection>
      ))}

      {/* "To be continued" ending */}
      <FadeInSection delay={600}>
        <div className="timeline-ending">
          <div className="timeline-ending-dot"></div>
          <div className="timeline-ending-content">
            <span className="timeline-ending-label">To Be Continued...</span>
            <p className="timeline-ending-text">
              This is only the first chapter. The best is yet to come.
            </p>
          </div>
        </div>
      </FadeInSection>
    </div>
  </div>
</section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <FadeInSection>
            <div className="section-header-center">
              <span className="section-label">Our People</span>
              <h2 className="section-heading">Meet the Team Behind Aus Careers</h2>
              <p className="section-subheading">
                A diverse group of passionate professionals dedicated to connecting Australians with opportunity.
              </p>
            </div>
          </FadeInSection>
          <div className="team-grid">
            {[
              { name: '', role: 'Chief Executive Officer', image: '' },
              { name: '', role: 'Chief Technology Officer', image: '' },
              { name: '', role: 'Head of Partnerships', image: '' },
              { name: '', role: 'Head of Customer Success', image: '' },
            ].map((member, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="team-card">
                  <div className="team-image-wrapper">
                    <img src={member.image} alt={member.name} className="team-image" />
                    <div className="team-social">
                      <a href="#" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="#" aria-label="Twitter">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1a10.66 10.66 0 0 1-9-4.35s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <FadeInSection>
            <div className="cta-content">
              <h2 className="cta-title">Ready to Start Your Journey?</h2>
              <p className="cta-description">
                Whether you're looking for your next opportunity or searching for the perfect candidate, 
                Aus Careers is here to help.
              </p>
              <div className="cta-buttons">
                <Link to="/jobs" className="btn-primary-large">
                  Browse Jobs
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <Link to="/contact" className="btn-secondary-large">
                  Contact Us
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;