import camperoImg from '../assets/campero.jpeg'

function Campero() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-6">
      <header className="mb-6 w-full max-w-3xl text-center">
        <img
          src={camperoImg}
          alt="Duatlón Campero Cufré"
          className="mx-auto w-1/2 rounded-2xl bg-white object-cover shadow-md"
        />
        <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">06 de diciembre</h3>
      </header>

      <section className="grid w-full max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2" aria-label="Modalidades de Duatlón Campero Cufré">
        <a
          href="https://cronometrajeinstantaneo.com/inscripciones/duatlon-campero"
          target="_blank"
          rel="noreferrer"
          className="flex min-h-24 items-center justify-center rounded-2xl border border-lime-300 bg-lime-50 px-6 py-6 text-center text-3xl font-extrabold uppercase tracking-wide text-lime-900 shadow-md transition-transform duration-200 hover:-translate-y-1 hover:bg-lime-100 hover:shadow-xl"
        >
          Individual
        </a>

        <a
          href="https://cronometrajeinstantaneo.com/inscripciones/duatlon-campero/dupla"
          target="_blank"
          rel="noreferrer"
          className="flex min-h-24 items-center justify-center rounded-2xl border border-lime-300 bg-lime-50 px-6 py-6 text-center text-3xl font-extrabold uppercase tracking-wide text-lime-900 shadow-md transition-transform duration-200 hover:-translate-y-1 hover:bg-lime-100 hover:shadow-xl"
        >
          Postas
        </a>
      </section>
    </div>
  )
}

export default Campero