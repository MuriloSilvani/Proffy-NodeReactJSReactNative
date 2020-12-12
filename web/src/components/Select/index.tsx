import React, { SelectHTMLAttributes } from 'react'

import './style.scss'

interface SelectProps extends SelectHTMLAttributes<HTMLInputElement> {
  name: string,
  label: string,
  options: Array<{
    value: string,
    label: string
  }>
}

const Input: React.FC<SelectProps> = ({ label, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor="subject">{ label } </label>
      <select defaultValue='' name={name} id={name}>
      <option value='' disabled hidden> Selecione uma opção </option>
      {
          options.map(op => {
            return <option value={op.value} key={op.value}> {op.label} </option>
          })
        }     
      </select>
    </div>
  )
}

export default Input