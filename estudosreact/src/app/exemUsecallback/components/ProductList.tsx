'use client'
interface ProductListProps {
  products: string[]
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <ul className="list-disc list-inside">
        {products.map((product, index) => (
          <li key={index} className="text-lg">
            {product}
          </li>
        ))}
      </ul>
    </div>
  )
}
