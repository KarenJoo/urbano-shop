import React from 'react';
import Navbar from '../Header';
import Footer from '../Footer';

export default function Layout(props) {
  const { children } = props; 
  
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
