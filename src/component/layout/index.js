import React from 'react';
import Navbar from '../reusables/navbar';
import Footer from '../reusables/footer';
import HeroHeader from '../reusables/heroheader';
import HomePage from '../pages/homepage';
import Enrollment from '../pages/enrollmentpage';
const Layout = ({ children }) => {
  return (
    <div >
      <div className=" border-bottom px-1 wow fadeIn" data-wow-delay="0.1s" style={{backgroundColor: '#FFFDEC'}}>
        <Navbar />
      </div>
      
      {/* Main Content */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;





// import React from 'react';
// import Navbar from '../reusables/navbar';
// import Footer from '../reusables/footer';

// const Layout = ({ children, showHeaderFooter = true }) => {
//   console.log("showHeaderFooter:", showHeaderFooter);
//   return (
//     <div>
//       {showHeaderFooter && (
//         <div className="border-bottom px-1 wow fadeIn" data-wow-delay="0.1s" style={{ backgroundColor: '#FFFDEC' }}>
//           <Navbar />
//         </div>
//       )}
      
//       {/* Main Content */}
//       <main>{children}</main>
      
//       {showHeaderFooter && <Footer />}
//     </div>
//   );
// };

// export default Layout;
