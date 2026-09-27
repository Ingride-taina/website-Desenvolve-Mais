function SeletorArea({ areas, areaSelecionada, aoSelecionar }) {
  return (
    <div className="grid gap-4 justify-items-stretch" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
      {areas.map((area) => {
        const ativo = areaSelecionada === area.id
        return (
          <button
            key={area.id}
            type="button"
            onClick={() => aoSelecionar(area.id)}
            className={`text-left p-5 rounded-2xl border-2 shadow-sm transition flex items-start gap-3 ${
              ativo
                ? 'border-azulPrincipal bg-[rgb(230,240,255)]'
                : 'border-transparent bg-white hover:border-azulPrincipal/40'
            }`}
          >
            <img src={area.imagem} alt="" className="w-9 h-9 shrink-0" />
            <div>
              <h3 className="font-bold">{area.nome}</h3>
              <p className="text-sm text-gray-600">{area.descricao}</p>
            </div>
          </button>
        )
      })}
    </div>
  )
}

export default SeletorArea
