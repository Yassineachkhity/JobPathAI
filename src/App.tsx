import React from 'react';
import './styles/index.css'
import Hero from './components/Hero';
import Features from './components/Features';
import Partners from './components/Partners';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
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
}

export default App;
