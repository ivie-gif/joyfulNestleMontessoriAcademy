// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;



// import React from 'react';
// import "./index.css";
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import HomePage from './component/pages/homepage';
// import ContactPage from "./component/pages/contactpage";

// function App() {
//   return (
//     <div className="App">
//       <HomePage /> 
//     </div>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./component/pages/homepage";
import ContactPage from "./component/pages/contactpage";
import BlogSection from "./component/pages/blogpage";
import BlogDetail from "./component/pages/blogdetails";
import Aboutus from "./component/pages/aboutus";
import Enrollment from "./component/pages/enrollmentpage";
import Career from "./component/pages/careerpage";

function App() {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
    // </Router>
  );
}

export default App;


