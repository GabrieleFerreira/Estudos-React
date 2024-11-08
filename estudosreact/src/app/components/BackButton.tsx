'use client'
import { useRouter } from 'next/navigation'
interface props {
  className?: string
}

export default function BackButton({ className }: props) {
  const router = useRouter()
  return (
    <div className={className}>
      <button
        onClick={() => {
          router.push('/')
        }}
        className="text-white p-3 hover:text-blue-50 text-xl "
      >
        Voltar
      </button>
    </div>
  )
}
