import cacImage from '../assets/cac.png'
import conociendoImage from '../assets/conociendo.jpg'
import comboImage from '../assets/combo-colonia-10-k.jpg'
import { Link } from 'react-router-dom'

function General() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-6" aria-label="Galeria general">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

        <article className="group overflow-hidden rounded-xl border border-lime-400/40 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(132,204,22,0.28)]">
          <img
            src={conociendoImage}
            alt="Conociendo"
            className="h-56 w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          />
        </article>

        <article className="group overflow-hidden rounded-xl border border-lime-400/40 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(132,204,22,0.28)]">
          <img
            src={comboImage}
            alt="Combo"
            className="h-56 w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          />
        </article>
      </div>
    </section>
  )
}

export default General