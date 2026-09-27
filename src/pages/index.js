import { useState } from 'react'
import Head from 'next/head'
import listaOds from '../dados/dadosOds.js'
import Cabecalho from '../componentes/Cabecalho.jsx'
import Rodape from '../componentes/Rodape.jsx'
import Botao from '../componentes/Botao.jsx'
import ListaOds from '../componentes/ListaOds.jsx'
import ConsultaDoacao from '../componentes/ConsultaDoacao.jsx'
import areasAvaliacao from '../dados/dadosAvaliacao.js'
import SeletorArea from '../componentes/SeletorArea.jsx'
import FormularioAvaliacao from '../componentes/FormularioAvaliacao.jsx'
import ResultadoAvaliacao from '../componentes/ResultadoAvaliacao.jsx'

function PaginaInicial() {
  const [busca, setBusca] = useState('')
  const [areaId, setAreaId] = useState(null)
  const [respostas, setRespostas] = useState(null)

  const odsFiltrados = listaOds.filter((ods) =>
    ods.titulo.toLowerCase().includes(busca.toLowerCase())
  )

  function limparBusca() {
    setBusca('')
  }

  const area = areasAvaliacao.find((item) => item.id === areaId) || null

  function selecionarArea(id) {
    setAreaId(id)
    setRespostas(null)
  }

  function trocarArea() {
    setAreaId(null)
    setRespostas(null)
  }

  function refazerAvaliacao() {
    setRespostas(null)
  }

  return (
    <div className="bg-[rgb(250,253,252)] min-h-screen text-black">
      <Head>
        <title>Desenvolve+</title>
      </Head>

      <Cabecalho />

      <main>
        <div className="flex justify-center">
          <div className="flex items-center gap-2 bg-[rgb(231,241,245)] rounded-full px-6 py-2 my-16 shadow">
            <img src="/img/coracao-ods.png" alt="" className="w-5 h-5" />
            <h2 className="text-sm">Nosso Propósito</h2>
          </div>
        </div>

        <section id="sobre" className="text-center px-4 scroll-mt-24">
          <h1 className="text-4xl md:text-6xl font-bold">
            Sobre o <span className="text-azulPrincipal">Desenvolve+</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            Nossa missão é simples, mas poderosa: inspirar mudanças reais a partir de pequenas
            ações locais. O Desenvolve Mais nasceu com o propósito de conectar práticas do dia a
            dia aos Objetivos de Desenvolvimento Sustentável (ODS) da Agenda 2030, mostrando como
            cada pessoa e negócio pode contribuir para um mundo mais justo e equilibrado.
          </p>
        </section>

        <div className="flex justify-center mt-20">
          <h1 className="text-lg bg-[rgb(234,238,238)] text-[rgb(80,88,126)] rounded-full px-6 py-2 shadow">
            Explore os cards <span className="text-azulPrincipal">ODS</span>
          </h1>
        </div>

        <section id="ods" className="w-[85%] max-w-5xl mx-auto my-8 p-6 rounded-3xl shadow-md scroll-mt-24">
          <div className="flex gap-3 flex-wrap justify-center mb-8">
            <input
              type="text"
              value={busca}
              onChange={(evento) => setBusca(evento.target.value)}
              placeholder="Filtrar ODS pelo nome..."
              className="border border-gray-300 rounded-full px-4 py-2 w-64"
            />
            <Botao texto="Limpar" aoClicar={limparBusca} />
          </div>

          <ListaOds lista={odsFiltrados} />
        </section>

        <section className="text-center my-16">
          <h1 className="text-3xl font-bold">Nossos Objetivos</h1>
          <p className="mt-3 text-lg text-gray-600">
            O que guia cada decisão e ação do Desenvolve<span className="text-azulPrincipal">+</span>
          </p>
        </section>

        <section className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-20 px-4">
          <div className="max-w-md p-8 rounded-2xl shadow bg-[rgb(230,240,255)]">
            <img src="/img/mission.png" alt="" className="w-8 h-8 mb-2" />
            <h1 className="text-lg font-bold mb-2">Missão</h1>
            <p className="text-gray-600">
              Nos conectar com pessoas e organizações que desejam fazer a diferença, apoiando um
              ecossistema de solidariedade e transformação social.
            </p>
          </div>

          <div className="max-w-md p-8 rounded-2xl shadow bg-[rgb(230,240,255)]">
            <img src="/img/light.png" alt="" className="w-8 h-8 mb-2" />
            <h1 className="text-lg font-bold mb-2">Visão</h1>
            <p className="text-gray-600">Ser responsáveis por incentivar uma sociedade mais justa e solidária.</p>
          </div>
        </section>

        <section className="text-center mb-10 px-4">
          <h1 className="text-3xl font-bold">
            Como <span className="text-azulPrincipal">ajudar agora</span>
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto">
            Colocar os ODS em prática pode começar com um gesto simples: doar algo perto de você.
          </p>
        </section>

        <section className="px-4 mb-20">
          <ConsultaDoacao />
        </section>

        <section id="avaliacao" className="px-4 mb-24 scroll-mt-24">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold">
              Avalie suas <span className="text-azulPrincipal">práticas profissionais</span>
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
              Escolha a área do seu negócio, responda algumas perguntas rápidas sobre o seu dia a
              dia e receba um feedback sobre o que já é uma boa prática de acordo com os ODS e o
              que pode melhorar.
            </p>
          </div>

          <div className="w-[90%] max-w-4xl mx-auto">
            {!area && (
              <>
                <h2 className="text-xl font-bold mb-4 text-center">Qual é a sua área de atuação?</h2>
                <SeletorArea areas={areasAvaliacao} areaSelecionada={areaId} aoSelecionar={selecionarArea} />
              </>
            )}

            {area && !respostas && (
              <>
                <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
                  <h2 className="text-xl font-bold">
                    Área selecionada: <span className="text-azulPrincipal">{area.nome}</span>
                  </h2>
                  <button
                    type="button"
                    onClick={trocarArea}
                    className="text-sm text-azulPrincipal underline"
                  >
                    Trocar área
                  </button>
                </div>

                <FormularioAvaliacao area={area} aoEnviar={setRespostas} />
              </>
            )}

            {area && respostas && (
              <ResultadoAvaliacao
                area={area}
                respostas={respostas}
                listaOds={listaOds}
                aoRefazer={refazerAvaliacao}
                aoTrocarArea={trocarArea}
              />
            )}
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  )
}

export default PaginaInicial