'use client'
import { useReducer, useState } from 'react'

type Action =
  | { type: 'add'; payload: string }
  | { type: 'remove'; payload: number }
type Todo = { id: number; task: string }

const todoReducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), task: action.payload }]
    case 'remove':
      return state.filter((todo) => todo.id !== action.payload)
    default:
      return state
  }
}

export default function UseReducerExample() {
  const [todos, dispatch] = useReducer(todoReducer, [])
  const [task, setTask] = useState('')

  const addTodo = () => {
    if (task.trim()) {
      dispatch({ type: 'add', payload: task })
      setTask('')
    }
  }

  return (
    <div className="min-h-screen  text-white flex flex-col items-center">
      <section className="text-center p-8">
        <h1 className="text-4xl font-bold mb-2">Exemplo de useReducer</h1>
        <p className="text-lg text-white max-w-2xl mx-auto">
          O `useReducer` é uma alternativa ao `useState` para o gerenciamento de
          estados mais complexos, como listas e objetos com múltiplas operações
          de atualização. Aqui, ele é usado para gerenciar uma lista de tarefas.
        </p>
      </section>

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">
          Lista de Tarefas
        </h2>

        <div className="flex gap-3 mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Adicionar tarefa"
            className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none transition-all duration-300"
          >
            Adicionar
          </button>
        </div>

        <div className="h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 rounded-lg">
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm"
              >
                <span className="text-gray-800">{todo.task}</span>
                <button
                  onClick={() => dispatch({ type: 'remove', payload: todo.id })}
                  className="text-sm p-2 rounded-lg text-red-600 hover:bg-red-200 font-semibold hover:text-red-800 transition-all duration-300"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="max-w-3xl mx-auto p-6 text-gray-300 mt-8">
        <h3 className="text-2xl font-semibold">Explicação do Código</h3>
        <p className="mt-2">
          Este exemplo usa o `useReducer` para controlar uma lista de tarefas,
          com duas ações: "adicionar" e "remover". A ação "adicionar" cria um
          novo item de tarefa, enquanto a "remover" exclui uma tarefa
          específica.
        </p>

        <h3 className="text-2xl font-semibold mt-8">Casos de Uso Comuns</h3>
        <p className="mt-2">
          O `useReducer` é ideal para cenários onde múltiplas operações precisam
          ser executadas no estado, como listas dinâmicas, formulários com
          validações complexas, ou lógica de atualização condicional.
        </p>
      </section>

      <section className="bg-gray-700 p-6 mt-8 text-white rounded-lg shadow-lg max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Dicas e Observações</h3>
        <ul className="list-disc ml-5 space-y-2 text-gray-300">
          <li>
            Use o `useReducer` quando o estado tiver múltiplas operações de
            atualização, como adição, remoção ou edição.
          </li>
          <li>
            Ideal para componentes com lógica de atualização complexa,
            garantindo que o estado seja mantido de forma previsível.
          </li>
          <li>
            Útil para criar arquiteturas de estado que sejam fáceis de estender
            e manter.
          </li>
        </ul>
      </section>
    </div>
  )
}
