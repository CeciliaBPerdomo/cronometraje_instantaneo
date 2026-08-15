function Campero() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-6">
      <header className="mb-8 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
          Duatlón Campero Cufré
        </h2>
      </header>

      <section className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2" aria-label="Modalidades de Duatlón Campero Cufré">
        <article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl">
          <h1 className="mt-1 text-2xl font-bold text-neutral-900">Duatlón Campero Cufré</h1>
          <h6 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600">Modalidad individual</h6>
          <h3 className="text-xl font-semibold text-neutral-900">06 de diciembre</h3>
          <div className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-lime-800">
            <a
              href="https://cronometrajeinstantaneo.com/inscripciones/duatlon-campero"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-16 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-4 py-4 transition-colors duration-200 hover:bg-lime-100"
            >
              Inscripciones abiertas
            </a>
          </div>
        </article>

        <article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl">
          <h1 className="mt-1 text-2xl font-bold text-neutral-900">Duatlón Campero Cufré</h1>
          <h6 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600">Modalidad duplas</h6>
          <h3 className="text-xl font-semibold text-neutral-900">06 de diciembre</h3>
          <div className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-lime-800">
            <a
              href="https://cronometrajeinstantaneo.com/inscripciones/duatlon-campero/dupla"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-16 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-4 py-4 transition-colors duration-200 hover:bg-lime-100"
            >
              Inscripciones abiertas
            </a>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Campero