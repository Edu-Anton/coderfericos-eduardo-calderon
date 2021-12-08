import React from 'react';
import './Input.css';

const Input = ({type, variant, width, ...attr}) => {
  
  return (
    <input 
      type={type}
      className={`a-input ${width} ${variant}`}
      {...attr}
    />
  )
}

Input.defaultProps = {
  type: "text",
  width: "w-100",
  variant: ""
}

export default Input
