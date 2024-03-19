import React from 'react';
import Navbar from './component/Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;