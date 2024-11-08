'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useCallback, useRef } from 'react'
import BackButton from '../components/BackButton'
import Input from './Input'

export default function UseImperativeHandle() {
  const inputRef = useRef<HTMLInputElement>(null)
  const acceptRef = useRef({ value: false })
  const router = useRouter()

  const handleClick = useCallback((e: FormEvent) => {
    e.preventDefault()
    console.log('Nome:', inputRef.current?.value)
    console.log('Termos aceitos:', acceptRef.current.value)
  }, [])

  const handleAcceptTerms = useCallback(() => {
    acceptRef.current.value = !acceptRef.current.value
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 to-indigo-900 text-white flex flex-col items-center">
      <BackButton className="p-4" />

      <section className="text-center p-8">
        <h1 className="text-4xl font-bold mb-2">
          Exemplo de useImperativeHandle
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          O `useImperativeHandle` permite que um componente filho expresse uma
          interface específica para o componente pai manipular sua referência.
          Aqui, demonstramos como acessar o valor de um input e um botão de
          aceite de termos.
        </p>
      </section>

      <div className="bg-gray-200 text-black rounded-lg shadow-lg p-8 w-full max-w-lg">
        <form className="flex flex-col gap-5" onSubmit={handleClick}>
          <Input
            label="Lista de nomes"
            name="Nome Completo"
            placeholder="Digite seu nome completo"
            className="h-10 w-full text-black"
            ref={inputRef}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg"
          >
            Adicionar Nome
          </button>
        </form>

        <button
          onClick={handleAcceptTerms}
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg"
        >
          {acceptRef.current.value ? 'Termos Aceitos' : 'Aceitar Termos'}
        </button>
      </div>

      <section className="max-w-3xl mx-auto p-6 text-gray-300 mt-8">
        <h3 className="text-2xl font-semibold">Explicação do Código</h3>
        <p className="mt-2">
          Neste exemplo, o `useImperativeHandle` permite que o componente pai
          acesse e manipule a referência de `inputRef` e `acceptRef`. O botão de
          "Aceitar Termos" atualiza `acceptRef.current.value`, que é verificado
          ao submeter o formulário.
        </p>

        <h3 className="text-2xl font-semibold mt-8">Casos de Uso Comuns</h3>
        <p className="mt-2">
          Este hook é particularmente útil quando você precisa controlar a
          referência de um componente filho, como um input, manipulando suas
          propriedades diretamente a partir do componente pai.
        </p>
      </section>

      <section className="bg-gray-700 p-6 mt-8 text-white rounded-lg shadow-lg max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Dicas e Observações</h3>
        <ul className="list-disc ml-5 space-y-2 text-gray-300">
          <li>
            Use `useImperativeHandle` apenas quando realmente precisar manipular
            uma referência diretamente.
          </li>
          <li>
            Evite o uso excessivo para não violar a "separação de preocupações"
            entre componentes pai e filho.
          </li>
          <li>
            Ideal para componentes personalizados com comportamento complexo,
            como sliders ou modais.
          </li>
        </ul>
      </section>
    </div>
  )
}
