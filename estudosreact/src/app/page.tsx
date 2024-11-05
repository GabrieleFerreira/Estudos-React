'use client'
import Link from 'next/link'

export default function Home() {
  const hooks = [
    { name: 'useState', path: '/exemUseState' },
    { name: 'useEffect', path: '/exemUseEffect' },
    { name: 'useReducer', path: '/exemUseReducer' },
    { name: 'useReducer', path: '/hooks/usereducer' },
  ]

  return (
    <div className="min-h-screen bg-base-100 text-center p-10">
      <h1 className="text-4xl font-bold mb-10">
        React Hooks - Exemplos Práticos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hooks.map((hook) => (
          <Link key={hook.name} href={hook.path}>
            <div className="btn btn-outline btn-primary w-full">
              {hook.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
