import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';


const partners = [
  {
    name: 'LinkedIn',
    logo: '/src/images/linkedin.png'
  },
  {
    name: 'Indeed',
    logo: '/src/images/indeed.jpeg'
  },
  {
    name: 'Glassdoor',
    logo: '/src/images/glassdoor.png'
  },
  {
    name: 'Gemini',
    logo: '/src/images/gemini.png'
  },
  {
    name: 'OpenAI',
    logo: '/src/images/openai.png'
  }
];

const Partners: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastInteractionTimeRef = useRef(Date.now());

  const resetAutoSlideTimer = () => {
    
    if (autoSlideTimerRef.current) {
      clearTimeout(autoSlideTimerRef.current);
    }

    autoSlideTimerRef.current = setTimeout(() => {
      if (isAutoSliding) {
        setCurrentIndex((prev) => (prev + 1) % partners.length);
      }
    }, 4000);

    lastInteractionTimeRef.current = Date.now();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
    setIsAutoSliding(false);
    resetAutoSlideTimer();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
    setIsAutoSliding(false);
    resetAutoSlideTimer();
  };

  
  useEffect(() => {
    resetAutoSlideTimer();


    return () => {
      if (autoSlideTimerRef.current) {
        clearTimeout(autoSlideTimerRef.current);
      }
    };
  }, [currentIndex, isAutoSliding]);

  useEffect(() => {
    const checkAutoSlideReset = setInterval(() => {
      const timeSinceLastInteraction = Date.now() - lastInteractionTimeRef.current;
      if (timeSinceLastInteraction > 10000) {
        setIsAutoSliding(true);
      }
    }, 1000);

    return () => clearInterval(checkAutoSlideReset);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { 
        duration: 0.2 
      }
    }
  };

  const navigationButtonStyle = "absolute top-1/2 -translate-y-1/2 z-10 " +
    "bg-white/80 hover:bg-white/90 p-2 rounded-full " +
    "shadow-lg transition-all duration-300 ease-in-out " +
    "hover:scale-110 active:scale-90 focus:outline-none";

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12 
          tracking-tight bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-600 to-purple-600">
          Nos partenaires
        </h2>
        
        <div className="relative flex items-center justify-center">
          {/* Progress Indicator */}
          <div 
            className="absolute top-[-30px] left-1/2 -translate-x-1/2 
            w-full max-w-md h-1 bg-gray-200 rounded-full overflow-hidden"
          >
            <motion.div 
              className="h-full bg-blue-500"
              initial={{ width: 0 }}
              animate={{ 
                width: isAutoSliding ? '100%' : '0%',
                transition: { 
                  duration: 4, 
                  ease: 'linear' 
                }
              }}
            />
          </div>

          {/* Previous Button */}
          <button 
            onClick={handlePrev} 
            className={`${navigationButtonStyle} left-0 md:left-[-60px]`}
            aria-label="Previous Partner"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
          </button>

          {/* Partner Carousel */}
          <div className="w-full max-w-4xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex justify-center items-center"
              >
                <div 
                  className="w-32 h-32 md:w-48 md:h-48 bg-white 
                  rounded-2xl shadow-lg hover:shadow-xl 
                  transition-all duration-300 ease-in-out
                  flex items-center justify-center
                  transform hover:-translate-y-2 hover:scale-105"
                >
                  <img 
                    src={partners[currentIndex].logo} 
                    alt={partners[currentIndex].name}
                    className="w-20 h-20 md:w-28 md:h-28 object-contain grayscale hover:grayscale-0 
                    transition-all duration-300 ease-in-out"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button 
            onClick={handleNext} 
            className={`${navigationButtonStyle} right-0 md:right-[-60px]`}
            aria-label="Next Partner"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Partner Name */}
        <div className="text-center mt-6">
          <motion.p 
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold text-gray-700"
          >
            {partners[currentIndex].name}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Partners;