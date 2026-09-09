import { useState } from 'react'
import Competitiva from '../Conociendo Colonia/Campeonato/Competitiva'
import Participativa from '../Conociendo Colonia/Campeonato/participativa'

function ConociendoColoniaPage() {
  const [modalidad, setModalidad] = useState<'Participativa' | 'Competitiva'>('Participativa')

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-6">
      <header className="mb-8 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
          Conociendo Colonia MTB
        </h2>
        <h2 className="mt-2 text-xl font-semibold text-lime-600 sm:text-2xl">Campeonato</h2>
        <h2 className="mt-1 text-sm font-medium uppercase tracking-[0.3em] text-neutral-300 sm:text-base">
          3 fechas
        </h2>
      </header>

      <section className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-label="Fechas de Conociendo Colonia MTB">
        <article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl">
          <h1 className="mt-1 text-2xl font-bold text-neutral-900">Antolín</h1>
          <h6 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600">2da fecha</h6>
          <h3 className="text-xl font-semibold text-neutral-900">27 de setiembre</h3>
          <a href="https://cronometrajeinstantaneo.com/inscripciones/conociendo-colonia-mtb-2" target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl border border-lime-500 bg-lime-500 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-lime-600">Inscripciones abiertas</a>
        </article>

        <article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl">
          <h1 className="mt-1 text-2xl font-bold text-neutral-900">Miguelete</h1>
          <h6 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600">1era Fecha</h6>
          <h3 className="text-xl font-semibold text-neutral-900">6 setiembre</h3>
          <div className="mt-5 grid grid-cols-1 gap-3 text-sm font-semibold uppercase tracking-[0.15em] sm:grid-cols-2">
            <a
              href="https://cronometrajeinstantaneo.com/resultados/conociendo-colonia-mtb-1/filtros?r=1"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-24 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-3 py-4 text-lime-800 transition-colors duration-200 hover:bg-lime-100"
            >
              Resultados Generales
            </a>
            <a
              href="https://cronometrajeinstantaneo.com/resultados/conociendo-colonia-mtb-1/consulta"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-24 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-3 py-4 text-lime-800 transition-colors duration-200 hover:bg-lime-100"
            >
              Resultados Individuales
            </a>
          </div>
        </article>

        <article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl">
          <h1 className="mt-1 text-2xl font-bold text-neutral-900">San Pedro</h1>
          <h6 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600">3era fecha</h6>
          <h3 className="text-xl font-semibold text-neutral-900">18 de octubre</h3>
          <div className="mt-5 flex min-h-24 flex-col items-center justify-center gap-1 rounded-xl border border-lime-300 bg-lime-50 px-3 py-4 text-base font-semibold uppercase tracking-[0.15em] text-lime-800">
            <span>Inscripciones Abiertas</span>
            <span className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-400">(Próximamente)</span>
          </div>
        </article>
      </section>

      <section className="mt-10 w-full" aria-labelledby="resultados-campeonato">
        <div className="mb-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-500">Conociendo Colonia MTB</p>
          <h2 id="resultados-campeonato" className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">Resultados Campeonato</h2>
          <div className="mt-4 inline-flex border border-lime-400" role="group" aria-label="Elegir modalidad">
            <button type="button" onClick={() => setModalidad('Participativa')} className={`px-5 py-3 font-bold transition-colors ${modalidad === 'Participativa' ? 'bg-lime-500 text-white' : 'bg-white text-neutral-800 hover:bg-lime-50'}`}>Participativa</button>
            <button type="button" onClick={() => setModalidad('Competitiva')} className={`px-5 py-3 font-bold transition-colors ${modalidad === 'Competitiva' ? 'bg-lime-500 text-white' : 'bg-white text-neutral-800 hover:bg-lime-50'}`}>Competitiva</button>
          </div>
        </div>
        {modalidad === 'Participativa' ? <Participativa /> : <Competitiva />}
      </section>
    </div>
  )
}

export default ConociendoColoniaPage
