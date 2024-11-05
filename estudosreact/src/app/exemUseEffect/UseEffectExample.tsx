'use client'

import { useEffect, useState } from 'react'

export default function AnimatedCountdown() {
  const [initialCount, setInitialCount] = useState(10)
  const [countdown, setCountdown] = useState(initialCount)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let intervalId: any

    if (isActive && countdown > 0) {
      intervalId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1)
      }, 1000)
    } else if (countdown === 0) {
      clearInterval(intervalId)
      alert('Tempo esgotado!')
      setIsActive(false)
    }

    return () => clearInterval(intervalId)
  }, [isActive, countdown])

  const handleStart = () => {
    setIsActive(true)
  }

  const handlePause = () => {
    setIsActive(false)
  }

  const handleReset = () => {
    setCountdown(initialCount)
    setIsActive(false)
  }

  const handleInputChange = (e: any) => {
    const { value } = e.target
    setInitialCount(Number(value))
    setCountdown(Number(value))
    setIsActive(false)
  }

  return (
    <div className="bg-blue-800 flex w-screen h-screen justify-center items-center">
      <div className="flex flex-col items-center justify-center h-[80%] bg-gray-700 w-[80%] xl:w-[60%]">
        <h1 className="text-5xl font-bold mb-4 text-white -mt-16">
          Contagem regressiva
        </h1>
        <div className="mb-4 mt-6">
          <input
            type="number"
            value={initialCount}
            onChange={handleInputChange}
            placeholder="Enter countdown value"
            className="border border-gray-300 rounded py-2 px-4 text-lg text-center"
            style={{ width: '12rem' }}
          />
        </div>
        <div
          className={`text-5xl font-bold text-white ${
            countdown === 0 ? 'text-red-500 animate-pulse' : ''
          }`}
        >
          {countdown}
        </div>
        <div className="flex gap-4 text-white mt-6">
          <button
            onClick={handleStart}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isActive ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isActive}
          >
            Iniciar
          </button>
          <button
            onClick={handlePause}
            className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              !isActive ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!isActive}
          >
            Pausar
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={isActive}
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  )
}
