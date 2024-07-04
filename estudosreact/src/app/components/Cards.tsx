import Image from 'next/image'
import Link from 'next/link'

interface CardsProps {
  src: string
  alt: string
  href: string
  hrefDoc: string
  message: string
}
export default function Cards({
  alt,
  href,
  src,
  message,
  hrefDoc,
}: CardsProps) {
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl h-auto">
      <figure>
        <Image src={src} alt={alt} width={350} height={350} />
      </figure>
      <div className="card-body bg-blue-200">
        <h2 className="card-title">Conceito</h2>
        <p className="font-semibold text-sm">{message}</p>
        <div className="card-actions flex gap-1">
          <Link href={href} className="btn btn-primary hover:bg-blue-800">
            Ver Exemplo
          </Link>
          <Link href={hrefDoc} className="btn btn-primary hover:bg-blue-800">
            Ver Documentação
          </Link>
        </div>
      </div>
    </div>
  )
}
