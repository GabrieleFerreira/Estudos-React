import Cards from './components/Cards'

export default function Home() {
  return (
    <>
      <div className="bg-blue-900  shadow-blue-100 g-cover bg-center w-full flex flex-col items-center justify-center ">
        <div className=" text-white font-extrabold text-[50px] justify-center items-center flex h-full mt-5">
          Explorando Hooks do React
        </div>
        <div className="grid grid-cols-2  gap-4  p-2 h-full mt-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
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
          <Cards
            src="/useref.png"
            alt="imagem use Ref"
            hrefDoc="https://legacy.reactjs.org/docs/hooks-reference.html#useref"
            href="http://localhost:3000/exemUseRef"
            message="Essencialmente, useRef é como uma “caixa” que pode conter um valor mutável em sua .currentpropriedade.

Você pode estar familiarizado com refs principalmente como uma forma de acessar o DOM . Se você passar um objeto ref para React com <div ref={myRef} />, o React definirá sua .currentpropriedade para o nó DOM correspondente sempre que esse nó mudar."
          />
          <Cards
            src="/callback.png"
            alt="imagem use callback"
            hrefDoc="https://react.dev/reference/react/useCallback"
            href="http://localhost:3000/exemUsecallback"
            message="Ao otimizar o desempenho de renderização, às vezes você precisará armazenar em cache as funções que você passa para componentes filhos. O useCallbacké um React Hook que permite armazenar em cache uma definição de função entre novas renderizações."
          />
        </div>
      </div>
    </>
  )
}
