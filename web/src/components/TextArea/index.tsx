import React, { TextareaHTMLAttributes } from 'react'

import './style.scss'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string,
  label: string
}

const TextArea: React.FC<TextAreaProps> = ({ label, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor="subject">{ label } </label>
      <textarea id={name} {...rest} />
    </div>
  )
}

export default TextArea