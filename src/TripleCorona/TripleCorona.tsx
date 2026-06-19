function TripleCorona() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-6">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
          Triple Corona CAC
        </h1>
        <h2 className="mt-2 text-xl font-semibold text-lime-600 sm:text-2xl">
          Senderos del Sur
        </h2>
        <h2 className="mt-1 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500 sm:text-base">
          - 2026 -
        </h2>
      </header>
      <section
        className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Proximas carreras"
      >
        <a
          href="https://cronometrajeinstantaneo.com/resultados/cerros-de-san-juan-26/generales"
          target="_blank"
          rel="noreferrer"
          className="block rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl"
        >
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">Cerros de San Juan</h2>
          <p className="text-base text-neutral-700">El despertar</p>
          <p className="mt-1 text-base text-neutral-700">7 de Junio</p>
        </a>

        <article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl">
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">Médanos del Calabrés</h2>
          <p className="text-base text-neutral-700">La prueba de Fuego</p>
          <p className="mt-1 text-base text-neutral-700">5 de Julio</p>
        </article>

        <article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl">
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">Anchorena Trail</h2>
          <p className="text-base text-neutral-700">La consagración</p>
          <p className="mt-1 text-base text-neutral-700">2 de Agosto</p>
        </article>
      </section>
    </div>
  )
}

export default TripleCorona