function Botao({ texto, aoClicar, tipo = 'button' }) {
  return (
    <button
      type={tipo}
      onClick={aoClicar}
      className="bg-azulPrincipal text-white px-5 py-2 rounded-full hover:opacity-90 transition"
    >
      {texto}
    </button>
  )
}

export default Botao
