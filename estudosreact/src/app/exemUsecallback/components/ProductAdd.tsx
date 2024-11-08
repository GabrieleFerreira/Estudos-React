'use client'
import { useCallback, useState } from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

export default function ProductAdd() {
  const [products, setProducts] = useState<string[]>([])

  const addProduct = useCallback((product: string) => {
    setProducts((prevProducts) => [...prevProducts, product])
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 to-indigo-900 text-white flex flex-col items-center">
      <section className="text-center p-8">
        <h1 className="text-4xl font-bold mb-2">Exemplo de useCallback</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          O `useCallback` é um hook do React que memoriza funções, evitando que
          elas sejam recriadas em cada renderização. Aqui, ele é usado para
          gerenciar a lista de produtos sem recriar a função `addProduct`.
        </p>
      </section>

      <div className="w-full max-w-md px-4">
        <ProductForm addProduct={addProduct} />
        <ProductList products={products} />
      </div>

      <section className="max-w-3xl mx-auto p-6 text-gray-300 mt-8">
        <h3 className="text-2xl font-semibold">Explicação do Código</h3>
        <p className="mt-2">
          Neste exemplo, `useCallback` memoriza a função `addProduct`, evitando
          que ela seja recriada em cada renderização do componente. Isso é
          especialmente útil quando `addProduct` é passado como prop para
          componentes filhos, como `ProductForm`.
        </p>

        <h3 className="text-2xl font-semibold mt-8">Casos de Uso Comuns</h3>
        <p className="mt-2">
          O `useCallback` é ideal para funções que são passadas para componentes
          filhos e que dependem de poucos valores externos. Ele ajuda a otimizar
          a performance, especialmente em listas ou componentes de alta
          frequência de renderização.
        </p>
      </section>

      <section className="bg-gray-700 p-6 mt-8 text-white rounded-lg shadow-lg max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Dicas e Observações</h3>
        <ul className="list-disc ml-5 space-y-2 text-gray-300">
          <li>
            Use `useCallback` apenas quando necessário; evite excessos que podem
            tornar o código complexo.
          </li>
          <li>
            Ideal para funções passadas como props para componentes filhos ou
            usadas em callbacks de eventos.
          </li>
          <li>
            Lembre-se de definir corretamente as dependências para evitar
            comportamento inesperado.
          </li>
        </ul>
      </section>
    </div>
  )
}
