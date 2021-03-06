import React, { InputHTMLAttributes } from 'react'

import './style.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  label: string
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor="subject">{ label } </label>
      <input type='text' id={name} {...rest} />
    </div>
  )
}

export default Input