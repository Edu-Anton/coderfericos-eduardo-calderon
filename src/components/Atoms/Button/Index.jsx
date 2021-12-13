import React from 'react';
import './Button.css';

const Button = ({variant, children, ...attr}) => {
  return (
    <button className={`btn cf-btn ${variant}`} {...attr}>
      {children}
    </button>
  )
}

export default Button
