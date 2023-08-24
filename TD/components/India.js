import React from 'react';
import styles from '../styles';

const India = () => {
  return (
  
    <div className="relative md:-mt-[12px] -mt-[2px] flex w-1/2 justify-end "
    style={{ zIndex: 1 }}>





           
      <video
        autoPlay
        loop
        muted
        className="sm: w-[900px] h-[570px] object-cover relative"
        style={{ zIndex: 2 }} 
        
      >
        <source src="/mapmv2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Grey button */}
      <button
        className="w-[180px] h-[105px] rounded-full bg-gray-500 border-2 border-blue-500 relative z-10"
        style={{
          borderRadius: '37px',
          backdropFilter: 'blur(15px)',
          boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
          position: 'absolute',
          bottom: '2%',
          right: '0%',
          zIndex: 10,
        }}
      >
        <h3 style={{ marginTop: '-8px', marginBottom: '9px', color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>
          LEADING ACROSS INDIA 
        </h3>
        <p style={{ color: '#fff', fontSize: '11px', textAlign: 'center', fontWeight: '400' }}>
          Hire in just 72 hours. Scale your team up-and-down from month-to-month as needed.
        </p>
      </button>
    </div>
  );
};

export default India;
