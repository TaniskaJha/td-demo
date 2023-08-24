import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Card() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getParagraphStyle = (index) => {
    let flexValue = 1;
    if (hoveredIndex === null) {
      flexValue = 1;
    } else if (hoveredIndex === index) {
      flexValue = 4;
    }

    return `h-full flex-${flexValue} overflow-hidden cursor-pointer transition-all duration-100 bg-gray-300 flex justify-center items-center relative`;
  };

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleHoverOut = () => {
    setHoveredIndex(null);
  };

  const imageSrc = 'blue.png'; // Replace with your image URL

  return (
    <div className="card flex gap-8 p-4 z-1" style={{ width: '1420px', height: '580px' }}>
      {[0, 1, 2].map((index) => (
        <motion.p
          key={index}
          className={getParagraphStyle(index)}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={handleHoverOut}
          initial={{ flex: 1 }}
          animate={{ flex: hoveredIndex === index ? 4 : 1 }}
        >
          <div className="flex flex-col items-center">
            <div className="absolute top-0">
              <div className="flex items-center relative">


                
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-gray-500 p-2 pr-10"
                  style={{ width: '441px', height: '60px', zIndex: 0 }}
                />
                <div  className="absolute top-[-30px] left-[-20px] w-15 h-20 ml-1 z-0">
                
                  <motion.img
                    src={imageSrc}
                    alt="Image"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
                    }}
                    className="w-15 h-20"
                    animate={{
                      rotate: 360, // Full rotation in degrees
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: 'linear',
                    }}
                  />
                </div>
                <div className="absolute top-0 right-0 transform -translate-y-1/4 translate-x-1/4">
                  <img
                    src="pinksearch.png"
                    alt="Search Icon"
                    className="h-28"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.p>
      ))}
    </div>
  );
}

export default Card;
