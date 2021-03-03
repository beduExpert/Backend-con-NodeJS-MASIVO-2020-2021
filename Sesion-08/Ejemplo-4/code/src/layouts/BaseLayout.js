import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BaseLayout = ({ children }) => (
  <>
    <Header />
    <main className="bg-white">
      {children}
    </main>
    <Footer />
  </>
);

export default BaseLayout;