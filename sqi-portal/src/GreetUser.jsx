import React from 'react';

const GreetUser = () => {
  return (
    <div className='greetUser' style={{ padding: '16px', marginBottom: '-8px' }}>
      <p style={{ 
        fontSize: '14px', 
        fontWeight: '400', 
        color: 'rgba(33, 37, 41, 0.7)', 
        margin: '0 0 0 0' 
      }}>
        Welcome Back
      </p>
      <h3 style={{ 
        fontSize: '24px', 
        fontWeight: '600', 
        color: '#212529', 
         margin: '0 0 -4px 0' 
      }}>
        Temiloluwa Akinbote
      </h3>
    </div>
  );
};

export default GreetUser;