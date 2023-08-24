import React from 'react';
import { motion } from 'framer-motion';

const ActionButton = ({ buttonText }) => (
  <div className="relative flex flex-col gap-2 mt-2">
    <motion.button
      className="relative w-[400px] h-[60px] font-bold bg-white border-2 border-gray"
      whileHover={{ scale: 1.25 }}
      whileTap={{ scale: 0.95 }}
      style={{ zIndex: 1 }}
    >
      <span
        style={{
          color: '#6E747B',
          fontFamily: 'Space Grotesk',
          fontSize: '28px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '30px',
          textTransform: 'uppercase',
        }}
      >
        {buttonText}
      </span>
      <div className="blue-blur"></div>
    </motion.button>
    <motion.div>
      <motion.img
        src="/blue.png"
        alt="Blue"
        className="absolute top-[-20px] left-[-20px] w-12 h-12 ml-1 z-0"
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: 'linear',
        }}
      />
    </motion.div>
  </div>
);

export default ActionButton;
