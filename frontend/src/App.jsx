
// import React from 'react';
// import Navbar from './Component/Navbar';
// import Home from './Pages/Home';
// import './App.css';

// function App() {
//   return (
//     <div className="app">
//       <Navbar />
//         <Home /> 
     
//     </div>
//   );
// }

// export default App;    

import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';  
import Home from './Pages/Home';
// Import other pages (create these files)
// import FindJobs from './Pages/FindJobs';
// import JobCategories from './Pages/JobCategories';
// import CareerAdvice from './Pages/CareerAdvice';
// import UploadResume from './Pages/UploadResume';
// import PostJob from './Pages/PostJob';
import './App.css';

function App() {
  return (
    <div className="app">    
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/jobs" element={<FindJobs />} />
        <Route path="/categories" element={<JobCategories />} />
        <Route path="/advice" element={<CareerAdvice />} />
        <Route path="/upload-resume" element={<UploadResume />} />
        <Route path="/post-job" element={<PostJob />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;     
