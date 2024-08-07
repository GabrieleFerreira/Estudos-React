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
    <div className="bg-custom-exemp bg-cover bg-center items-center text-center flex-col h-full w-full">
      <div className="flex-col text-[40px]  flex h-full w-full gap-4 font-bold justify-center items-center  pb-32  overflow-hidden">
        <h2 className="text-white">Exemplo do Use State</h2>
        <p className="text-white mt-5">Contador: {count}</p>
        <div className="flex gap-5 mt-4">
          <button onClick={decremento} className="bg-red-300 rounded-md w-20">
            -
          </button>
          <button onClick={incremento} className="bg-green-400 rounded-md w-20">
            +
          </button>
        </div>
      </div>
    </div>
  )
}
