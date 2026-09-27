function Rodape() {
  return (
    <footer className="bg-[rgb(11,94,135)] text-gray-100 pt-10 mt-16">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8 px-8 pb-8 border-b border-white/20">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <img src="/img/coracao-ods.png" alt="" className="w-8 h-8" />
            <span className="text-2xl">
              Desenvolve <span className="text-azulPrincipal">+</span>
            </span>
          </div>
          <p>Conectando pessoas e organizações que desejam transformar o mundo por meio da educação e da conscientização.</p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-bold mb-4">Navegação</h3>
          <ul className="list-none space-y-1">
            <li>Sobre Nós</li>
            <li>Painel ODS</li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-bold mb-4">Contato</h3>
          <p>@Desenvolve_Mais</p>
          <p>Caxias, MA</p>
        </div>
      </div>

      <div className="text-center py-5 text-sm text-gray-200">
        <p>©2025 Desenvolve +. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Rodape
