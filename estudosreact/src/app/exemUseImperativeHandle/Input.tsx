'use client'

import React, { forwardRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, name, ...rest },
  ref
) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="flex flex-col justify-center items-center text-white"
      >
        {label}
        <input {...rest} ref={ref} />
      </label>
    </div>
  )
}

export default forwardRef(Input)
