import Botao from './Botao.jsx'

const PONTOS_POR_NIVEL = { boa: 2, parcial: 1, melhorar: 0 }

const ESTILO_NIVEL = {
  boa: {
    rotulo: 'Boa prática',
    corBorda: 'border-green-400',
    corFundo: 'bg-green-50',
    corTexto: 'text-green-700'
  },
  parcial: {
    rotulo: 'Pode melhorar',
    corBorda: 'border-yellow-400',
    corFundo: 'bg-yellow-50',
    corTexto: 'text-yellow-700'
  },
  melhorar: {
    rotulo: 'Precisa de atenção',
    corBorda: 'border-red-400',
    corFundo: 'bg-red-50',
    corTexto: 'text-red-700'
  }
}

function nomeOds(listaOds, id) {
  const ods = listaOds.find((item) => item.id === id)
  return ods ? `ODS ${ods.id} · ${ods.titulo}` : `ODS ${id}`
}

function ResultadoAvaliacao({ area, respostas, listaOds, aoRefazer, aoTrocarArea }) {
  const itens = area.perguntas.map((pergunta) => {
    const indiceEscolhido = respostas[pergunta.id]
    const opcao = pergunta.opcoes[indiceEscolhido]
    return { pergunta, opcao }
  })

  const pontosObtidos = itens.reduce((soma, item) => soma + PONTOS_POR_NIVEL[item.opcao.nivel], 0)
  const pontosMaximos = itens.length * 2
  const percentual = Math.round((pontosObtidos / pontosMaximos) * 100)

  let mensagemGeral = ''
  if (percentual >= 80) {
    mensagemGeral = 'Parabéns! Sua rotina profissional já está bem alinhada às boas práticas e aos ODS.'
  } else if (percentual >= 50) {
    mensagemGeral = 'Você já tem boas bases. Com alguns ajustes, sua rotina pode se alinhar ainda mais aos ODS.'
  } else {
    mensagemGeral = 'Existem boas oportunidades de melhoria. Pequenas mudanças já aproximam sua rotina dos ODS.'
  }

  const idsOdsFortes = [...new Set(
    itens.filter((item) => item.opcao.nivel === 'boa').flatMap((item) => item.pergunta.odsRelacionados)
  )]
  const idsOdsAtencao = [...new Set(
    itens.filter((item) => item.opcao.nivel === 'melhorar').flatMap((item) => item.pergunta.odsRelacionados)
  )]

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-md p-8 text-center">
        <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Resultado da avaliação</h3>
        <p className="text-4xl font-bold text-azulPrincipal mb-2">{percentual}%</p>
        <p className="text-gray-700 max-w-xl mx-auto">{mensagemGeral}</p>

        {idsOdsFortes.length > 0 && (
          <p className="text-sm text-gray-500 mt-4">
            ODS que você já fortalece: {idsOdsFortes.map((id) => `ODS ${id}`).join(', ')}
          </p>
        )}
        {idsOdsAtencao.length > 0 && (
          <p className="text-sm text-gray-500 mt-1">
            ODS que merecem mais atenção: {idsOdsAtencao.map((id) => `ODS ${id}`).join(', ')}
          </p>
        )}
      </div>

      <div className="space-y-4">
        {itens.map(({ pergunta, opcao }) => {
          const estilo = ESTILO_NIVEL[opcao.nivel]
          return (
            <div key={pergunta.id} className={`rounded-2xl border-l-4 p-5 shadow-sm ${estilo.corBorda} ${estilo.corFundo}`}>
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <h4 className="font-bold">{pergunta.texto}</h4>
                <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white ${estilo.corTexto}`}>
                  {estilo.rotulo}
                </span>
              </div>
              <p className="text-gray-700 mb-3">{opcao.feedback}</p>
              <p className="text-xs text-gray-500">
                Relacionado a: {pergunta.odsRelacionados.map((id) => nomeOds(listaOds, id)).join(' · ')}
              </p>
            </div>
          )
        })}
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        <Botao texto="Refazer avaliação" aoClicar={aoRefazer} />
        <button
          type="button"
          onClick={aoTrocarArea}
          className="border border-azulPrincipal text-azulPrincipal px-5 py-2 rounded-full hover:bg-azulPrincipal hover:text-white transition"
        >
          Escolher outra área
        </button>
      </div>
    </div>
  )
}

export default ResultadoAvaliacao
