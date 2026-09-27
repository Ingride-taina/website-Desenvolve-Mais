function Cabecalho() {
  return (
    <header className="flex justify-center pt-10 pb-4">
      <nav className="flex w-[80%] max-w-5xl items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <img src="/img/coracao-ods.png" alt="Coração ODS" className="w-12 h-auto" />
          <h1 className="text-2xl font-bold text-black">
            Desenvolve<span className="text-azulPrincipal">+</span>
          </h1>
        </div>

        <ul className="flex gap-8 text-lg list-none">
          <li>
            <a href="#ods" className="text-gray-700 hover:text-azulPrincipal">
              ODS
            </a>
          </li>
          <li>
            <a href="#doacao" className="text-gray-700 hover:text-azulPrincipal">
              Como ajudar
            </a>
          </li>
          <li>
            <a href="/avaliacao" className="text-gray-700 hover:text-azulPrincipal">
              Avaliação de Práticas
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Cabecalho
