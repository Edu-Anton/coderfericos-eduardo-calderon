import React from 'react';
import './Button.scss';

const Button = ({variant, children, ...attr}) => {
  return (
    <button className={`btn cf-btn ${variant}`} {...attr}>
      {children}
    </button>
  )
}

export default Button
