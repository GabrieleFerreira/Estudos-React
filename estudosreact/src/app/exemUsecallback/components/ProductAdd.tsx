'use client'
import { useCallback, useState } from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

export default function ProductAdd() {
  const [products, setProducts] = useState<string[]>([])
  console.log({ products })
  const addProduct = useCallback((product: string) => {
    setProducts((prevProducts) => [...prevProducts, product])
  }, [])

  return (
    <div className="max-w-md w-full">
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  )
}
