'use client'

import { useEffect, useState } from 'react'

const AnimatedCountdown = () => {
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
    <div className="bg-custom-exemp bg-custom-bg bg-cover bg-center items-center">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4 text-black ml-96 -mt-16">
          Animated Countdown
        </h1>
        <div className="mb-4 ml-96 mt-4">
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
          className={`text-5xl font-bold text-black ml-96 ${
            countdown === 0 ? 'text-red-500 animate-pulse' : ''
          }`}
        >
          {countdown}
        </div>
        <div className="flex gap-4 mt-4 ml-96">
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

export default AnimatedCountdown
