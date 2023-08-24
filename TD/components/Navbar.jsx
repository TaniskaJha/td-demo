import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  // logo animation
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prevIsFlipped) => !prevIsFlipped);
    }, 1000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="py-3 relative" 
    >
      <div className="absolute w-[100%] h-[88%] inset-0 gradient-pink-white " />


      <div className="flex flex-row" >
      <div className={`${styles.innerWidth} flex justify-start items-center relative px-12`}> 
      
        <motion.img
          src="/tdlogo.png"
          alt="menu"
          className="w-[80px] h-[99px] object-contain relative z-10 "
          initial={{ scaleX: 1 }}
          animate={{ scaleX: isFlipped ? -1 : 1 }} 
          transition={{ duration: 0.3 }}
        />
        </div>
        <div className= "flex justify-start items-end relative"  > 

        <div className="container flex justify-center items-center gap-8 px-12" style={{ marginTop: '-40px !important' }}>
        <h2 className="text-[20px] leading-[30.24px] text-black relative z-10" style={{
          width: '130px',
          height: '32px',
          color: '#000',
          fontFamily: 'Poppins',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '140%',
          letterSpacing: '0.23px',
        }}>
          <span >GST Search</span>
        </h2>
        <h2 className="text-[20px] leading-[30.24px] text-black relative z-10" style={{
          width: '180px',
          height: '32px',
          color: '#000',
          fontFamily: 'Poppins',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '140%',
          letterSpacing: '0.23px',
        }}>
          <span >Company Search</span>
  
        </h2>
        <h2 className="text-[20px] leading-[30.24px] text-black relative z-10" style={{
          width: '150px',
          height: '32px',
          color: '#000',
          fontFamily: 'Poppins',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '140%',
          letterSpacing: '0.23px',
        }}>
          <span>Buy Services</span>
        </h2>
        
        
       
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-full"
          style={{
            borderRadius: '25px',
            background: '#207CBF',
            boxShadow: '0px 0px 35px 0px rgba(52, 204, 205, 0.35)',
            width: '137px',
            height: '40px',
            flexShrink: 0,
          }}
        >
          Contact Us
        </button>

        <div className="flex flex-col items-center"> {/* Wrap the images in a div */}
         
          <img 
            src="/Plus.png" 
            style={{
              width: '20px',
              height: '20px',
              marginTop: '-10px',
              flexShrink: 0,
            }}
          />

            <img 
            src="/cart.svg" 
            style={{
              width: '30px',
              height: '30px',
              flexShrink: 0,
            }}
          />
        </div>
        </div>
       

      </div>
    </div>
  </motion.nav>
);
      }
export default Navbar;
