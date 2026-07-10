function TripleCorona() {
  const pdf6k = new URL('../Triple Corona - 6k.pdf', import.meta.url).href
  const pdf12k = new URL('../Triple Corona - 12k.pdf', import.meta.url).href
  const pdf21k = new URL('../Triple Corona - 21k.pdf', import.meta.url).href

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-6">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
          Triple Corona CAC
        </h1>
        <h2 className="mt-2 text-xl font-semibold text-lime-600 sm:text-2xl">
          Senderos del Sur
        </h2>
        <h2 className="mt-1 text-sm font-medium uppercase tracking-[0.3em] text-neutral-300 sm:text-base">
          - 2026 -
        </h2>
      </header>
      <section
        className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Proximas carreras"
      >
        <article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl">
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">Cerros de San Juan</h2>
          <p className="text-base text-neutral-700">El despertar</p>
          <p className="mt-1 text-base text-neutral-700">7 de Junio</p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm font-semibold uppercase tracking-[0.2em]">
            <a
              href="https://cronometrajeinstantaneo.com/resultados/cerros-de-san-juan-26/generales"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-28 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-4 py-5 text-lime-800 transition-colors duration-200 hover:bg-lime-100"
            >
              Tiempos
            </a>
            <a
              href="https://photos.app.goo.gl/WdNXB66Hknrmv2nY8"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-28 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-4 py-5 text-center text-lime-800 transition-colors duration-200 hover:bg-lime-100"
            >
              Fotos <br />
              1ra fecha
            </a>
          </div>
        </article>

        <article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl">
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">Médanos del Calabrés</h2>
          <p className="text-base text-neutral-700">La prueba de Fuego</p>
          <p className="mt-1 text-base text-neutral-700">5 de Julio</p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm font-semibold uppercase tracking-[0.2em]">
            <a
              href="https://cronometrajeinstantaneo.com/resultados/medanos-del-calabres-2026/generales"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-28 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-4 py-5 text-lime-800 transition-colors duration-200 hover:bg-lime-100"
            >
              Tiempos
            </a>
            <a
              href="https://alediazfotografia.com/eventos/triple-corona-cac"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-28 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-4 py-5 text-center text-lime-800 transition-colors duration-200 hover:bg-lime-100"
            >
              Fotos <br />
               2da fecha
            </a>
          </div>
        </article>

        <article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl">
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">Anchorena Trail</h2>
          <p className="text-base text-neutral-700">La consagración</p>
          <p className="mt-1 text-base text-neutral-700">2 de Agosto</p>
          <a
            href="https://ticketfacil.uy/event/Triple-Corona-CAC-Anchorena-Trail/info"
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex min-h-28 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-4 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-lime-800 transition-colors duration-200 hover:bg-lime-100"
          >
            Inscripciones Abiertas
          </a>
        </article>
      </section>

      <section
        className="mt-8 w-full rounded-2xl border border-lime-200 bg-white p-6 shadow-md"
        aria-label="Campeonato"
      >
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-neutral-900">
          Clasificación Triple Corona 
        </h2>
        <h3 className="text-center text-lg font-semibold text-neutral-700">Luego de la 2da fecha</h3>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href={pdf6k}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-lime-300 bg-lime-50 p-8 text-center shadow-sm transition-colors duration-200 hover:bg-lime-100"
          >
            <h3 className="text-2xl font-bold uppercase tracking-[0.2em] text-lime-800">6k</h3>
          </a>
          <a
            href={pdf12k}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-lime-300 bg-lime-50 p-8 text-center shadow-sm transition-colors duration-200 hover:bg-lime-100"
          >
            <h3 className="text-2xl font-bold uppercase tracking-[0.2em] text-lime-800">12k</h3>
          </a>
          <a
            href={pdf21k}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-lime-300 bg-lime-50 p-8 text-center shadow-sm transition-colors duration-200 hover:bg-lime-100"
          >
            <h3 className="text-2xl font-bold uppercase tracking-[0.2em] text-lime-800">21k</h3>
          </a>
        </div>
      </section>
    </div>
  )
}

export default TripleCorona