

// import { Routes, Route } from 'react-router-dom';
// import Navbar from './Component/Navbar';
// import Footer from './Component/Footer';  
// import Home from './Pages/Home';
// // Import other pages (create these files)
// // import FindJobs from './Pages/FindJobs';
// // import JobCategories from './Pages/JobCategories';
// // import CareerAdvice from './Pages/CareerAdvice';
// // import UploadResume from './Pages/UploadResume';
// // import PostJob from './Pages/PostJob';
// import './App.css';

// function App() {
//   return (
//     <div className="app">    
//       <Navbar /> 
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/jobs" element={<FindJobs />} />
//         <Route path="/categories" element={<JobCategories />} />
//         <Route path="/advice" element={<CareerAdvice />} />
//         <Route path="/upload-resume" element={<UploadResume />} />
//         <Route path="/post-job" element={<PostJob />} /> */}
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;  

import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';  
import CareerAdvice from './Pages/CareerAdvice';
import AdviceCategory from './Pages/AdviceCategory';
import AdviceArticle from './Pages/AdviceArticle';
// import FindJobs from './Pages/FindJobs';
// import JobCategories from './Pages/JobCategories';
// import UploadResume from './Pages/UploadResume';
// import PostJob from './Pages/PostJob';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} /> 
        <Route path="/career-advice" element={<CareerAdvice />} />
        <Route path="/career-advice/category/career/:slug" element={<AdviceCategory />} />
        <Route path="/career-advice/article/:slug" element={<AdviceArticle />} />
        {/* <Route path="/jobs" element={<FindJobs />} /> */}
        {/* <Route path="/categories" element={<JobCategories />} /> */}
        {/* <Route path="/upload-resume" element={<UploadResume />} /> */}
        {/* <Route path="/post-job" element={<PostJob />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;