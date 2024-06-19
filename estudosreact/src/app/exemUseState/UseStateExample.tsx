'use client'
import { useState } from 'react'

export default function UseStateExample() {
  const [count, setCount] = useState(0)
  const incremento = () => {
    setCount(count + 1)
  }
  const decremento = () => {
    setCount(count - 1)
  }

  return (
    <div className="flex justify-center items-center text-center flex-col text-2xl h-screen w-full bg-gray-400 gap-4 font-bold">
      <h2>Exemplo do Use State</h2>
      <p>Contador: {count}</p>
      <div className="flex gap-3">
        <button onClick={incremento} className="bg-green-400 rounded-md w-20">
          +
        </button>
        <button onClick={decremento} className="bg-red-300 rounded-md w-20">
          -
        </button>
      </div>
    </div>
  )
}
