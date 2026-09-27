import { useState } from 'react'

function ConsultaDoacao() {
  const [cepDigitado, setCepDigitado] = useState('')
  const [endereco, setEndereco] = useState(null)
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  async function buscarEndereco(evento) {
    evento.preventDefault()
    setErro('')
    setEndereco(null)

    const cepLimpo = cepDigitado.replace(/\D/g, '')

    if (cepLimpo.length !== 8) {
      setErro('Digite um CEP válido, com 8 números.')
      return
    }

    setCarregando(true)

    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      const dados = await resposta.json()

      if (dados.erro) {
        setErro('CEP não encontrado.')
        setCarregando(false)
        return
      }

      setEndereco({
        cidade: dados.localidade,
        estado: dados.uf,
        bairro: dados.bairro
      })
    } catch (erroRequisicao) {
      setErro('Não foi possível buscar o endereço agora. Tente novamente.')
    } finally {
      setCarregando(false)
    }
  }

  const linkDoacao = endereco
    ? `https://www.google.com/maps/search/pontos+de+doação+em+${encodeURIComponent(
        endereco.cidade + ' ' + endereco.estado
      )}`
    : null

  return (
    <div id="doacao" className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 max-w-2xl mx-auto scroll-mt-24">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">
        Encontre um ponto de doação perto de você
      </h3>
      <p className="text-gray-600 mb-6">
        Digite seu CEP e descubra sua cidade. A partir dela, te ajudamos a encontrar pontos de
        doação próximos — uma forma simples de colocar os ODS em prática no dia a dia.
      </p>

      <form onSubmit={buscarEndereco} className="flex gap-3 flex-wrap mb-4">
        <input
          type="text"
          value={cepDigitado}
          onChange={(evento) => setCepDigitado(evento.target.value)}
          placeholder="Digite seu CEP"
          className="border border-gray-300 rounded-full px-4 py-2 flex-1 min-w-[180px]"
        />
        <button
          type="submit"
          className="bg-azulPrincipal text-white px-5 py-2 rounded-full hover:opacity-90 transition"
        >
          Buscar
        </button>
      </form>

      {carregando && <p className="text-gray-500">Buscando seu endereço...</p>}
      {erro && <p className="text-red-500">{erro}</p>}

      {endereco && !carregando && !erro && (
        <div className="text-gray-700">
          <p className="mb-4">
            Você está em <span className="font-semibold">{endereco.cidade} - {endereco.estado}</span>.
          </p>
          <a
            href={linkDoacao}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-azulPrincipal text-white px-5 py-2 rounded-full hover:opacity-90 transition"
          >
            Ver pontos de doação perto de mim
          </a>
        </div>
      )}
    </div>
  )
}

export default ConsultaDoacao
