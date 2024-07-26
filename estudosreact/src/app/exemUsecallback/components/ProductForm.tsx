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
      className="bg-white shadow-md rounded-lg p-4 mb-6"
    >
      <h2 className="text-2xl font-bold mb-4">Digite o nome do produto</h2>
      <div className="mb-4">
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="border rounded w-full py-2 px-3 text-gray-700"
          placeholder="Nome do produto"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Adicionar Produto
      </button>
    </form>
  )
}
