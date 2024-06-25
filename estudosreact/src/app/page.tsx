import Cards from './components/Cards'

export default function Home() {
  return (
    <div className="flex mt-2 gap-3 p-2 bg-slate-200 h-full">
      <Cards
        src="/state.png"
        alt="imagem use state"
        href="http://localhost:3000/exemUseState"
        hrefDoc="https://pt-br.legacy.reactjs.org/docs/hooks-effect.html"
        message=" O useState é um hook do React que permite adicionar estado a
          componentes funcionais. Ele retorna um array com dois elementos: o
          valor atual do estado e uma função para atualizar esse valor"
      />
      <Cards
        src="/effect.png"
        alt="imagem use state"
        href="http://localhost:3000/exemUseEffect"
        hrefDoc="https://pt-br.legacy.reactjs.org/docs/hooks-state.html"
        message="O Effect Hook (Hook de Efeito) te permite executar efeitos colaterais em componentes funcionais.Usando esse Hook, você diz ao React que o componente precisa fazer algo apenas depois da renderização. O React ira se lembrar da função que você passou (nos referiremos a ele como nosso “efeito”), e chamá-la depois que realizar as atualizações do DOM."
      />
    </div>
  )
}
