import { useState } from 'react'
import Resultados5k from './Resultados5k'
import Resultados10k from './Resultados10k'

function ResultadosComboPage() {
  const [distancia, setDistancia] = useState<'5K' | '10K'>('5K')

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-6" aria-labelledby="resultados-campeonato">
      <div className="border border-lime-200 bg-white py-5 shadow-md sm:py-6">
        <div className="mb-4 text-center">
          <h1 id="resultados-campeonato" className="text-2xl font-extrabold text-neutral-900">Resultados del campeonato</h1>
          <div className="mt-4 inline-flex border border-lime-400" role="group" aria-label="Elegir distancia">
            <button type="button" onClick={() => setDistancia('5K')} className={`px-6 py-3 font-bold transition-colors ${distancia === '5K' ? 'bg-lime-500 text-white' : 'bg-white text-neutral-800 hover:bg-lime-50'}`}>5K</button>
            <button type="button" onClick={() => setDistancia('10K')} className={`px-6 py-3 font-bold transition-colors ${distancia === '10K' ? 'bg-lime-500 text-white' : 'bg-white text-neutral-800 hover:bg-lime-50'}`}>10K</button>
          </div>
        </div>
        {distancia === '5K' ? <Resultados5k /> : <Resultados10k />}
      </div>
    </section>
  )
}

export default ResultadosComboPage