import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
