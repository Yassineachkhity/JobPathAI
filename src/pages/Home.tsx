import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import './../styles/index.css'

function Home() {
    return (
        <div>
        <div className="min-h-screen bg-white">
        
        <main>
        <Hero />
        <Features />
        <Partners />
        </main>
        <Footer />
        </div>
        </div>
    )
}

export default Home
