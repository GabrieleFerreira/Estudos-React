'use client'
import Link from 'next/link'

export default function Home() {
  const hooks = [
    { name: 'useState', path: '/exemUseState' },
    { name: 'useEffect', path: '/exemUseEffect' },
    { name: 'useReducer', path: '/exemUseReducer' },
    { name: 'useImperativeHandle', path: '/exemUseImperativeHandle' },
    { name: 'useCallback', path: '/exemUsecallback' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-blue-800 text-center p-10 text-white">
      <h1 className="text-5xl font-bold mb-12 tracking-wider">
        Exemplos Práticos de React Hooks
      </h1>
      <p className="text-lg mb-16 text-gray-200 max-w-2xl mx-auto">
        Explore exemplos práticos de alguns dos principais hooks do React,
        incluindo <span className="font-semibold">useState</span>,{' '}
        <span className="font-semibold">useEffect</span>, e muitos mais. Clique
        em qualquer um para ver detalhes e como cada hook pode ser implementado.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {hooks.map((hook) => (
          <Link key={hook.name} href={hook.path}>
            <div className="bg-white text-blue-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 transform hover:scale-105 cursor-pointer">
              {hook.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
