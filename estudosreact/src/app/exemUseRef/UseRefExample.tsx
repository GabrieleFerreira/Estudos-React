'use client'
import { useRef } from 'react'

export function UseRefExample() {
  const inputRef = useRef<HTMLInputElement>(null)

  const focusInput = () => {
    inputRef.current?.focus()
  }

  return (
    <div className="bg-custom-exemp  bg-center items-center h-screen bg-cover">
      <div className=" flex flex-col justify-center items-center text-center h-screen">
        <h2 className="text-white text-4xl -mt-3">Exemplo de UseRef</h2>
        <input ref={inputRef} type="text" className="mt-6" />
        <button onClick={focusInput} className="text-yellow-200 mt-3">
          Focus Input
        </button>
      </div>
    </div>
  )
}
