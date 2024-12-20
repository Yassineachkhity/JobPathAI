import React, { useState, useEffect } from 'react';

const Particle = ({ style }) => (
  <div 
    className="absolute bg-white opacity-50 rounded-full" 
    style={{
      width: '4px',
      height: '4px',
      ...style
    }}
  />
);


const Header = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    
    const generateParticles = () => {
      const newParticles = Array.from({ length: 150 }, (_, index) => ({
        id: index,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          transform: `scale(${0.5 + Math.random() * 1.5})`,
          animation: `
            float${index} ${3 + Math.random() * 5}s 
            ease-in-out 
            infinite 
            alternate
          `
        }
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <header className="relative w-full h-16 bg-blue-900 overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <Particle key={particle.id} style={particle.style} />
        ))}
      </div>
      
      <div className="relative z-10 flex items-center h-full max-w-4xl p-6">
        <div className="text-white text-2xl font-bold px-4 hover:text-blue-200 transition-colors duration-300">
          <a href="/" className="flex items-center">
            <span className="mr-2">JobPath</span>
            <span className="text-blue-300">AI</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        ${particles.map((particle, index) => `
          @keyframes float${index} {
            0% {
              transform: translateY(0) scale(${particle.style.transform.match(/\d+(\.\d+)?/)[0]});
              opacity: 0.3;
            }
            100% {
              transform: translateY(-${20 + Math.random() * 50}px) scale(${0.5 + Math.random() * 1.5});
              opacity: 0.7;
            }
          }
        `).join('')}
      `}</style>
    </header>
  );
};

export default Header;