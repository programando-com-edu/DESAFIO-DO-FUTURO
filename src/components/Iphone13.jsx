// src/components/iPhone13.js
import React from 'react';
import './iPhone13.css';

const IPhone13 = ({classes, children}) => {
  return (
    <div className={`iphone-13 ${classes}`}>
      {children}
    </div>
  );
};

export default IPhone13;
