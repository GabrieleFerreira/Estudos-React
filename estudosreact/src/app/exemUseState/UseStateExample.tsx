'use client'
import { useState } from 'react'
import BackButton from '../components/BackButton'

export default function StateCounter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-blue-700 to-indigo-900 text-white">
      <BackButton className="p-4" />

      <section className="text-center p-10">
        <h1 className="text-4xl font-bold mb-2">Exemplo de useState</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          O `useState` é um hook fundamental do React que permite adicionar
          estado a componentes funcionais. Aqui, temos um contador simples para
          demonstrar como o `useState` funciona.
        </p>
      </section>

      <div className="flex flex-col items-center">
        <div className="bg-gray-200 text-black rounded-lg shadow-lg p-10 w-full max-w-md flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-center">Contador</h2>
          <p className="text-gray-700 mb-6 text-center">
            Este contador utiliza o `useState` para armazenar o valor atual e
            atualizá-lo com os botões.
          </p>

          <div className="text-4xl font-semibold mb-4">{count}</div>
          <div className="flex gap-4">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setCount(count - 1)}
            >
              Decrementar
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setCount(count + 1)}
            >
              Incrementar
            </button>
          </div>
        </div>
      </div>

      <section className="max-w-3xl mx-auto p-6 text-gray-300">
        <h3 className="text-2xl font-semibold mt-8">Explicação do Código</h3>
        <p className="mt-2">
          No exemplo acima, usamos o `useState` para inicializar o estado
          `count` com o valor `0`. Os botões usam as funções `setCount` para
          incrementar ou decrementar o valor.
        </p>

        <h3 className="text-2xl font-semibold mt-8">Casos de Uso Comuns</h3>
        <p className="mt-2">
          O `useState` é útil em diversos cenários, como armazenar valores de
          entrada de formulários, alternar temas, controlar abas, entre outros.
        </p>
      </section>

      <section className="bg-gray-700 p-6 mt-8 text-white rounded-lg shadow-lg max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Dicas e Observações</h3>
        <ul className="list-disc ml-5 space-y-2 text-gray-300">
          <li>
            Use `useState` para valores que mudam ao longo da execução do
            componente.
          </li>
          <li>
            Mantenha o estado simples para evitar re-renderizações
            desnecessárias.
          </li>
          <li>
            Evite fazer operações complexas diretamente no estado, para
            facilitar a manutenção.
          </li>
        </ul>
      </section>
    </div>
  )
}
