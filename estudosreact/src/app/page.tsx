import Cards from './components/Cards'

export default function Home() {
  return (
    <div className="flex mt-2 gap-3">
      <Cards
        src="/state.png"
        alt="imagem use state"
        height={500}
        width={500}
        href="http://localhost:3000/exemUseState"
        message=" O useState é um hook do React que permite adicionar estado a
          componentes funcionais. Ele retorna um array com dois elementos: o
          valor atual do estado e uma função para atualizar esse valor"
      />
    </div>
  )
}
