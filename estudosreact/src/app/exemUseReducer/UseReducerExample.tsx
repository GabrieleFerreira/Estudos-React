// components/ReducerExample.tsx
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
    dispatch({ type: 'add', payload: task })
    setTask('')
  }

  return (
    <div className="p-5 bg-base-200 rounded-lg h-full">
      <span className=" flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">Exemplo de useReducer </h1>
        <h2 className="text-2xl font-bold mb-4">Lista de Tarefas</h2>
      </span>

      <div className="flex gap-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="input input-bordered mb-4"
          placeholder="Adicionar tarefa"
          id="tarefas"
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          Adicionar
        </button>
      </div>
      <div className="h-96 flex  w-full">
        <ul className="mt-4 overflow-y-auto w-full">
          {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between mb-2">
              <span className="px-2 flex"> {todo.task}</span>
              <button
                className="btn btn-sm btn-error px-2"
                onClick={() => dispatch({ type: 'remove', payload: todo.id })}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
