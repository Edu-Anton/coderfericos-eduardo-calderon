import React from 'react';
import './Button.css'


const Button = ({variant, children}) => {
  return (
    <button className={`text-color-red btn ${variant}`}>
      {children}
    </button>
  )
}

export default Button
