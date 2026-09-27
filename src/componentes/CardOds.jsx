import { useState } from 'react'

function CardOds({ ods }) {
  const [virado, setVirado] = useState(false)

  function virarCard() {
    setVirado(!virado)
  }

  return (
    <div
      className={`w-full max-w-[160px] aspect-square cursor-pointer card-virar ${virado ? 'card-virado' : ''}`}
      onClick={virarCard}
    >
      <div className="relative w-full h-full card-virar-interno">
        <div className="card-frente absolute w-full h-full rounded-2xl shadow-md overflow-hidden bg-white flex items-center justify-center">
          <img src={ods.imagem} alt={ods.titulo} className="w-full h-full object-contain" />
        </div>

        <div className="card-verso absolute w-full h-full rounded-2xl shadow-md overflow-hidden bg-[rgb(117,157,192)] text-white flex flex-col items-center justify-center text-center p-3">
          <h3 className="text-sm font-bold mb-1">{ods.titulo}</h3>
          <p className="text-xs">{ods.descricao}</p>
        </div>
      </div>
    </div>
  )
}

export default CardOds
