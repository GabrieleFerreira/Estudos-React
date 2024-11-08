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
    <div className="flex flex-col mb-4">
      <label
        htmlFor={name}
        className="text-lg font-semibold text-gray-300 mb-2"
      >
        {label}
      </label>
      <input
        {...rest}
        ref={ref}
        id={name}
        className="w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      />
    </div>
  )
}

export default forwardRef(Input)
