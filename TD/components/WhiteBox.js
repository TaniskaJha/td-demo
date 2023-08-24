import React from 'react';
import { motion } from 'framer-motion';

const WhiteBox = ({ imgSrc, title }) => (
  <div className="flex items-center flex-col mb-4">
    <h3 className="text-gray-600 font-bold text-4xl mb-2">
      {title}
    </h3>
    <div className="flex items-center relative">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-500 p-2 pr-10" 
        style={{ width: '400px' , height: '60px', }} 
      />
      <motion.img
          src={imgSrc}
          alt={title}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
          }}
          className="absolute top-[-30px] left-[-20px] w-15 h-20 ml-1"
          style={{ zIndex: -1 }}
          animate={{
            rotate: 360, // Full rotation in degrees
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'linear',
          }}
        />
        <div className="lightblue-blur"></div>
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 translate-x-1/3">
        <img
          src="pinksearch.png"
          alt="Search Icon"
          className="h-28"
        />
      </div>
    </div>
    <motion.div
      className="bg-gray-200 p-6  relative"
      style={{ width: '400px', height: '900px' }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
      }}
    >
      
       
      
      
    </motion.div>
  </div>
);

export default WhiteBox;
