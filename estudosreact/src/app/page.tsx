import Cards from './components/Cards'

export default function Home() {
  return (
    <>
      <div className="bg-custom-bg bg-cover bg-center w-full h-screen flex flex-col items-center justify-center">
        <div className=" text-white font-extrabold text-[50px] justify-center flex items-center">
          Explorando Hooks do React
        </div>
        <div className="flex gap-3 p-2 h-auto mt-4">
          <Cards
            src="/state.png"
            alt="imagem use state"
            href="http://localhost:3000/exemUseState"
            hrefDoc="https://pt-br.legacy.reactjs.org/docs/hooks-state.html"
            message=" O useState é um hook do React que permite adicionar estado a
          componentes funcionais. Ele retorna um array com dois elementos: o
          valor atual do estado e uma função para atualizar esse valor"
          />
          <Cards
            src="/effect.png"
            alt="imagem use state"
            hrefDoc="https://pt-br.legacy.reactjs.org/docs/hooks-effect.html"
            href="http://localhost:3000/exemUseEffect"
            message="O Effect Hook (Hook de Efeito) te permite executar efeitos colaterais em componentes funcionais.Usando esse Hook, você diz ao React que o componente precisa fazer algo apenas depois da renderização. O React ira se lembrar da função que você passou (nos referiremos a ele como nosso “efeito”), e chamá-la depois que realizar as atualizações do DOM."
          />
        </div>
      </div>
    </>
  )
}
