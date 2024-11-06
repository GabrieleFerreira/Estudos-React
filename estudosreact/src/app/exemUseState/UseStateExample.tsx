'use client'
import { useState } from 'react'

export default function StateCounter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex w-full h-screen bg-blue-800 justify-center items-center">
      <div className="flex flex-col items-center p-5 bg-gray-600 rounded-lg shadow-lg h-1/2  w-1/2 justify-center">
        <div className="flex flex-col text-white">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Exemplo de Use State
          </h1>

          <h1 className="text-2xl font-bold mb-4 text-center"> Contador</h1>
        </div>
        <div className="text-3xl font-semibold text-white">{count}</div>
        <div className="gap-5 flex">
          <button
            className="mt-4 btn btn-primary bg-red-500 hover:bg-red-700 font-semibold text-white"
            onClick={() => setCount(count - 1)}
          >
            Decrementar
          </button>
          <button
            className="mt-4 btn btn-primary bg-green-500  hover:bg-green-600 text-sm text-white "
            onClick={() => setCount(count + 1)}
          >
            Incrementar
          </button>
        </div>
      </div>
    </div>
  )
}
