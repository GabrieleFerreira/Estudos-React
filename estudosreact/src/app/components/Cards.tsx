import Image from 'next/image'
import Link from 'next/link'

interface CardsProps {
  src: string
  alt: string
  href: string
  width: number
  height: number
  message: string
}
export default function Cards({
  alt,
  href,
  src,
  height,
  width,
  message,
}: CardsProps) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={src} alt={alt} width={width} height={height} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Conceito</h2>
        <p>{message}</p>
        <div className="card-actions justify-end">
          <Link href={href} className="btn btn-primary">
            Ver Exemplo
          </Link>
        </div>
      </div>
    </div>
  )
}
