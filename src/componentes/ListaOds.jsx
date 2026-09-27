import CardOds from './CardOds.jsx'

function ListaOds({ lista }) {
  if (lista.length === 0) {
    return <p className="text-center text-gray-500">Nenhum ODS encontrado.</p>
  }

  return (
    <div className="grid gap-5 justify-items-center" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
      {lista.map((ods) => (
        <CardOds key={ods.id} ods={ods} />
      ))}
    </div>
  )
}

export default ListaOds
