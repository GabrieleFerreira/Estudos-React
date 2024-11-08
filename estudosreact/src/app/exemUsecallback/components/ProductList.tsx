'use client'
interface ProductListProps {
  products: string[]
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-center">Lista de Produtos</h2>
      {products.length > 0 ? (
        <ul className="list-disc list-inside space-y-2">
          {products.map((product, index) => (
            <li key={index} className="text-lg">
              {product}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">Nenhum produto adicionado.</p>
      )}
    </div>
  )
}
