'use client'

import { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'

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
    <>
      <BackButton />

      <div className="min-h-screen  text-white flex flex-col items-center">
        <section className="text-center p-8">
          <h1 className="text-4xl font-bold mb-2">Exemplo de useEffect</h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            O `useEffect` permite a execução de efeitos colaterais, como
            chamadas de API e configurações de temporizadores. Neste exemplo, o
            hook controla uma contagem regressiva com opções de iniciar, pausar
            e resetar.
          </p>
        </section>

        <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md text-gray-800 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center mb-6">
            Contagem Regressiva
          </h2>

          <div className="mb-4">
            <input
              type="number"
              value={initialCount}
              onChange={handleInputChange}
              placeholder="Definir valor da contagem"
              className="w-full py-2 px-4 border border-gray-300 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div
            className={`text-5xl font-bold mb-6 ${
              countdown === 0 ? 'text-red-500 animate-pulse' : 'text-gray-800'
            }`}
          >
            {countdown}
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleStart}
              className={`px-4 py-2 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 transition-all duration-300 ${
                isActive ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isActive}
            >
              Iniciar
            </button>
            <button
              onClick={handlePause}
              className={`px-4 py-2 rounded-lg font-semibold text-white bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 ${
                !isActive ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={!isActive}
            >
              Pausar
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-lg font-semibold text-white bg-gray-500 hover:bg-gray-600 transition-all duration-300"
            >
              Reiniciar
            </button>
          </div>
        </div>

        <section className="max-w-3xl mx-auto p-6 text-gray-300 mt-8">
          <h3 className="text-2xl font-semibold">Explicação do Código</h3>
          <p className="mt-2">
            O `useEffect` é utilizado para iniciar o temporizador quando
            `isActive` é verdadeiro e `countdown` é maior que 0. O hook também
            limpa o temporizador quando o componente é desmontado ou quando
            `isActive` muda para falso.
          </p>

          <h3 className="text-2xl font-semibold mt-8">Casos de Uso Comuns</h3>
          <p className="mt-2">
            O `useEffect` é útil para executar código em resposta a mudanças no
            estado ou nas props, incluindo chamadas de API, configurações de
            assinaturas e atualizações de DOM.
          </p>
        </section>

        <section className="bg-gray-700 p-6 mt-8 text-white rounded-lg shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Dicas e Observações</h3>
          <ul className="list-disc ml-5 space-y-2 text-gray-300">
            <li>
              Certifique-se de definir dependências corretamente para evitar
              loops infinitos.
            </li>
            <li>
              Retorne uma função de limpeza para evitar efeitos colaterais
              indesejados.
            </li>
            <li>
              Evite usar `useEffect` para lógica de renderização; ele deve ser
              usado para efeitos colaterais.
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
