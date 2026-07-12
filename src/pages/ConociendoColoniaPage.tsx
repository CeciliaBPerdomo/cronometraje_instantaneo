function ConociendoColoniaPage() {
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
          <h6 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600">1era Fecha</h6>
          <h3 className="text-xl font-semibold text-neutral-900">6 setiembre</h3>
          <h1 className="mt-1 text-2xl font-bold text-neutral-900">Miguelete</h1>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm font-semibold uppercase tracking-[0.15em]">
            <a
              href="https://cronometrajeinstantaneo.com/inscripciones/conociendo-colonia-mtb-1"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-24 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-3 py-4 text-lime-800 transition-colors duration-200 hover:bg-lime-100"
            >
              Inscripciones Abiertas
            </a>
            <a
              href="https://cronometrajeinstantaneo.com/resultados/conociendo-colonia-mtb-1/filtros?r=1"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-24 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-3 py-4 text-lime-800 transition-colors duration-200 hover:bg-lime-100"
            >
              Resultados
            </a>
          </div>
        </article>

        <article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl">
          <h6 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600">2da fecha</h6>
          <h3 className="text-xl font-semibold text-neutral-900">27 de setiembre</h3>
          <h1 className="mt-1 text-2xl font-bold text-neutral-900">Antolin</h1>
        </article>

        <article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl">
          <h6 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600">3era fecha</h6>
          <h3 className="text-xl font-semibold text-neutral-900">18 de octubre</h3>
          <h1 className="mt-1 text-2xl font-bold text-neutral-900">San Pedro</h1>
        </article>
      </section>
    </div>
  )
}

export default ConociendoColoniaPage
