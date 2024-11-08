'use client'
import React, { useCallback, useState } from 'react'

interface ProductFormProps {
  addProduct: (product: string) => void
}

export default function ProductForm({ addProduct }: ProductFormProps) {
  const [productName, setProductName] = useState('')

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (productName.trim()) {
        addProduct(productName)
        setProductName('')
      }
    },
    [addProduct, productName]
  )

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg p-6 mb-6 text-gray-800"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Adicionar Produto</h2>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="w-full py-2 px-4 border border-gray-300 rounded-lg mb-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Nome do produto"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
      >
        Adicionar Produto
      </button>
    </form>
  )
}
