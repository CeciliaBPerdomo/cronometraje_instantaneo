import { useState } from 'react'
import Competitiva from './Competitiva'
import Participativa from './participativa'

function ResultadosConociendoPage() {
  const [modalidad, setModalidad] = useState<'Participativa' | 'Competitiva'>('Participativa')

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-6" aria-labelledby="resultados-campeonato">
      <div className="border border-lime-200 bg-white py-5 shadow-md sm:py-6">
        <div className="mb-4 text-center">
          <h1 id="resultados-campeonato" className="text-2xl font-extrabold text-neutral-900">Resultados del campeonato</h1>
          <div className="mt-4 inline-flex border border-lime-400" role="group" aria-label="Elegir modalidad">
            <button type="button" onClick={() => setModalidad('Participativa')} className={`px-5 py-3 font-bold transition-colors ${modalidad === 'Participativa' ? 'bg-lime-500 text-white' : 'bg-white text-neutral-800 hover:bg-lime-50'}`}>Participativa</button>
            <button type="button" onClick={() => setModalidad('Competitiva')} className={`px-5 py-3 font-bold transition-colors ${modalidad === 'Competitiva' ? 'bg-lime-500 text-white' : 'bg-white text-neutral-800 hover:bg-lime-50'}`}>Competitiva</button>
          </div>
        </div>
        {modalidad === 'Participativa' ? <Participativa /> : <Competitiva />}
      </div>
    </section>
  )
}

export default ResultadosConociendoPage