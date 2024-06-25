'use client'
import { useEffect, useState } from 'react'

export default function UseEffectExample() {
  const [count, setCount] = useState(0)
  const [increment, setIncrement] = useState(false)
  const [decrement, setDecrement] = useState(false)

  useEffect(() => {
    if (increment) {
      setCount(count + 1)
      setIncrement(false) // Reset increment state
    }
    if (decrement) {
      setCount(count - 1)
      setDecrement(false) // Reset decrement state
    }
  }, [increment, decrement])

  return (
    <div className="flex w-full h-screen justify-center items-center flex-col text-2xl font-bold gap-3 bg-slate-200">
      <h2>useEffect Example</h2>
      <p>Contador: {count}</p>
      <div className="flex gap-5">
        <button
          onClick={() => setDecrement(true)}
          className="bg-red-200 rounded-md w-10
           h-10"
        >
          -
        </button>
        <button
          onClick={() => setIncrement(true)}
          className="bg-green-200 rounded-md w-10
           h-10"
        >
          +
        </button>
      </div>
    </div>
  )
}
