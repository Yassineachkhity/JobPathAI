import React, { useState, useEffect } from "react";

const Particle = ({ style }: { style: React.CSSProperties }) => (
  <div 
    className="absolute bg-white opacity-50 rounded-full" 
    style={{
      width: '4px',
      height: '4px',
      ...style
    }}
  />
);

const Footer: React.FC = () => {
  const [particles, setParticles] = useState<{ id: number; style: React.CSSProperties }[]>([]);

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
    <footer className="relative bg-gray-800 text-white py-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <Particle key={particle.id} style={particle.style} />
        ))}
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <p className="text-base font-medium mb-2">&copy; {new Date().getFullYear()} JobPathAI. All rights reserved.</p>
        <p className="text-base mb-4">Contact us: <a href="mailto:jobpathai@contact.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline">jobpathai@contact.com</a></p>
        <div className="mt-4">
          <p className="text-base font-medium mb-2">Contributors:</p>
          <div className="flex justify-center space-x-8">
            <p className="text-sm text-gray-300 hover:text-white transition-colors duration-300">Yassine Achkhity</p>
            <p className="text-sm text-gray-300 hover:text-white transition-colors duration-300">Adnane Karmouch</p>
            <p className="text-sm text-gray-300 hover:text-white transition-colors duration-300">Assim Ayoub</p>
          </div>
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
    </footer>
  );
};

export default Footer;