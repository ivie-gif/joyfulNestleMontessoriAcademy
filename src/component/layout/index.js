import React from 'react';
import Navbar from '../reusables/navbar';
import Footer from '../reusables/footer';

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
