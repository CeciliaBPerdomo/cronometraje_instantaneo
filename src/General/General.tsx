import cacImage from '../assets/cac.png'
import camperoImage from '../assets/campero2.jpg'
import conociendoImage from '../assets/conociendo.jpg'
import comboImage from '../assets/combo-colonia-10-k.jpg'
import { Link } from 'react-router-dom'

function General() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-6" aria-label="Galeria general">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="border border-lime-400/50 bg-white p-5 text-center shadow-md sm:col-span-2 lg:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-700">Combo Colonia</p>
          <h1 className="mt-1 text-2xl font-extrabold text-neutral-900 sm:text-3xl">Resultados Campeonato Combo 26/27</h1>
          <div className="mx-auto mt-4 grid max-w-md grid-cols-2 gap-3">
            <Link
              to="/combo/resultados-5k"
              className="border border-lime-400 bg-lime-500 px-4 py-3 font-bold text-white transition-colors hover:bg-lime-600"
            >
              5K
            </Link>
            <Link
              to="/combo/resultados-10k"
              className="border border-neutral-800 bg-neutral-900 px-4 py-3 font-bold text-white transition-colors hover:bg-neutral-700"
            >
              10K
            </Link>
          </div>
        </article>

        <Link
          to="/combo"
          aria-label="Ir a la pagina de Combo Colonia 10K"
          className="group overflow-hidden rounded-xl border border-lime-400/40 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(132,204,22,0.28)]"
        >
          <img
            src={comboImage}
            alt="Combo"
            className="h-56 w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <Link
          to="/conociendo-colonia-mtb"
          aria-label="Ir a la pagina de Conociendo Colonia MTB"
          className="group overflow-hidden rounded-xl border border-lime-400/40 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(132,204,22,0.28)]"
        >
          <img
            src={conociendoImage}
            alt="Conociendo"
            className="h-56 w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <Link
          to="/campero"
          aria-label="Ir a la pagina de Campero"
          className="group overflow-hidden rounded-xl border border-lime-400/40 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(132,204,22,0.28)]"
        >
          <img
            src={camperoImage}
            alt="Campero"
            className="h-56 w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <Link
          to="/cac"
          aria-label="Ir a la pagina de Triple Corona CAC"
          className="group overflow-hidden rounded-xl border border-lime-400/40 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(132,204,22,0.28)]"
        >
          <img
            src={cacImage}
            alt="CAC"
            className="h-56 w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      </div>
    </section>
  )
}

export default General