'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useCallback, useRef } from 'react'
import Input from './Input'

export default function UseImperativeHandle() {
  const inputRef = useRef<HTMLInputElement>(null)
  const acceptRef = useRef({ value: false })
  const router = useRouter()
  const handleClick = useCallback((e: FormEvent) => {
    e.preventDefault()
    console.log(inputRef.current?.value)
    console.log(acceptRef.current.value)
  }, [])

  const handleAcceptTerms = useCallback(() => {
    acceptRef.current.value = !acceptRef.current.value
  }, [])

  return (
    <>
      <div className="flex left-3 w-28 h-10 text-white p-4 hover:bg-gray-400">
        <button
          onClick={() => {
            router.push('/')
          }}
        >
          Voltar
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <form className="flex gap-3 " onSubmit={handleClick}>
          <Input
            label="Lista de nomes"
            name="Nome Completo"
            placeholder="Digite seu nome completo"
            className="h-10 w-96 text-black"
            ref={inputRef}
          />
          <button type="submit" className="text-white">
            Adicionar
          </button>
        </form>

        <button onClick={handleAcceptTerms} className=" text-white">
          Aceitar Termos
        </button>
      </div>
    </>
  )
}
