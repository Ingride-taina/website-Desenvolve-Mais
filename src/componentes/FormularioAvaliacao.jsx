import { useState } from 'react'
import Botao from './Botao.jsx'

function FormularioAvaliacao({ area, aoEnviar }) {
  const [respostas, setRespostas] = useState({})
  const [erro, setErro] = useState('')

  function selecionarResposta(perguntaId, indiceOpcao) {
    setRespostas((anterior) => ({ ...anterior, [perguntaId]: indiceOpcao }))
    setErro('')
  }

  function enviarFormulario(evento) {
    evento.preventDefault()

    const faltando = area.perguntas.some((pergunta) => respostas[pergunta.id] === undefined)
    if (faltando) {
      setErro('Responda todas as perguntas para receber seu feedback.')
      return
    }

    aoEnviar(respostas)
  }

  return (
    <form onSubmit={enviarFormulario} className="space-y-8">
      {area.perguntas.map((pergunta, indice) => (
        <div key={pergunta.id} className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="font-bold mb-4">
            {indice + 1}. {pergunta.texto}
          </h3>

          <div className="space-y-2">
            {pergunta.opcoes.map((opcao, indiceOpcao) => (
              <label
                key={indiceOpcao}
                className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition ${
                  respostas[pergunta.id] === indiceOpcao
                    ? 'border-azulPrincipal bg-[rgb(230,240,255)]'
                    : 'border-gray-200 hover:border-azulPrincipal/40'
                }`}
              >
                <input
                  type="radio"
                  name={pergunta.id}
                  className="mt-1"
                  checked={respostas[pergunta.id] === indiceOpcao}
                  onChange={() => selecionarResposta(pergunta.id, indiceOpcao)}
                />
                <span>{opcao.texto}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      {erro && <p className="text-red-500 text-center">{erro}</p>}

      <div className="flex justify-center">
        <Botao texto="Ver meu feedback" tipo="submit" />
      </div>
    </form>
  )
}

export default FormularioAvaliacao
