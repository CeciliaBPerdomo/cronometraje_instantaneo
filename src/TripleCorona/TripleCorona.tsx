import { Link } from 'react-router-dom'
import calaveraNoChilla from '../General/CAC/CACNC.jpeg'
import logoCac from '../General/CAC/logo cac.png'

function TripleCorona() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-6">
      <article className="mb-5 w-full overflow-hidden rounded-2xl border border-lime-200 bg-white shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(15rem,0.75fr)]">
          <img src={calaveraNoChilla} alt="Calavera No Chilla" className="h-56 w-full object-cover sm:h-full" />
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <img src={logoCac} alt="Logo CAC" className="h-16 w-auto object-contain" />
            <h2 className="mt-4 text-2xl font-extrabold text-neutral-900">Inscripciones abiertas</h2>
            <p className="mt-1 text-lg font-semibold text-neutral-700">Calavera No Chilla</p>
            <a
              href="https://ticketfacil.uy/event/Carrera-Calavera-No-Chilla/registerToEvent"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl border border-lime-500 bg-lime-500 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-lime-600"
            >
              Inscribirme
            </a>
          </div>
        </div>
      </article>

      <Link
        to="/cac/triple-corona-2026"
        className="flex w-full flex-col items-center justify-center rounded-2xl border border-lime-400 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
      >
        <h2 className="text-2xl font-extrabold text-neutral-900">Triple Corona 2026</h2>
        <span className="mt-3 rounded-xl border border-lime-500 bg-lime-500 px-5 py-2 text-sm font-bold uppercase tracking-wide text-white">Ver carreras y clasificación</span>
      </Link>
    </div>
  )
}

export default TripleCorona