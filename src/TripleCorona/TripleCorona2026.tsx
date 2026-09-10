import { Link } from 'react-router-dom'

function TripleCorona2026() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-6">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl">Triple Corona 2026</h1>
        <h2 className="mt-2 text-xl font-semibold text-lime-600 sm:text-2xl">Senderos del Sur</h2>
      </header>
      <section className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-label="Carreras Triple Corona 2026">
        <article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md">
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">Cerros de San Juan</h2><p className="text-base text-neutral-700">El despertar</p><p className="mt-1 text-base text-neutral-700">7 de Junio</p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm font-semibold uppercase tracking-[0.2em]"><a href="https://cronometrajeinstantaneo.com/resultados/cerros-de-san-juan-26/filtros" target="_blank" rel="noreferrer" className="flex min-h-28 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-4 py-5 text-lime-800 hover:bg-lime-100">Tiempos</a><a href="https://photos.app.goo.gl/WdNXB66Hknrmv2nY8" target="_blank" rel="noreferrer" className="flex min-h-28 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-4 py-5 text-center text-lime-800 hover:bg-lime-100">Fotos<br />1ra fecha</a></div>
        </article>
        <article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md">
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">Médanos del Calabrés</h2><p className="text-base text-neutral-700">La prueba de Fuego</p><p className="mt-1 text-base text-neutral-700">5 de Julio</p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm font-semibold uppercase tracking-[0.2em]"><a href="https://cronometrajeinstantaneo.com/resultados/medanos-del-calabres-2026/filtros?r=1" target="_blank" rel="noreferrer" className="flex min-h-28 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-4 py-5 text-lime-800 hover:bg-lime-100">Tiempos</a><a href="https://alediazfotografia.com/eventos/triple-corona-cac" target="_blank" rel="noreferrer" className="flex min-h-28 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-4 py-5 text-center text-lime-800 hover:bg-lime-100">Fotos<br />2da fecha</a></div>
        </article>
        <article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md">
          <h2 className="mb-2 text-xl font-semibold text-neutral-900">Anchorena Trail</h2><p className="text-base text-neutral-700">La consagración</p><p className="mt-1 text-base text-neutral-700">2 de Agosto</p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm font-semibold uppercase tracking-[0.2em]"><a href="https://cronometrajeinstantaneo.com/resultados/anchorena-2026/categorias?r=1" target="_blank" rel="noreferrer" className="flex min-h-28 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-4 py-5 text-lime-800 hover:bg-lime-100">Tiempos</a><a href="https://photos.app.goo.gl/wY4rspDi4qs9iVmr9" target="_blank" rel="noreferrer" className="flex min-h-28 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-4 py-5 text-center text-lime-800 hover:bg-lime-100">Fotos<br />3ra fecha</a></div>
        </article>
      </section>
      <section className="mt-8 w-full rounded-2xl border border-lime-200 bg-white p-6 shadow-md" aria-label="Clasificación Triple Corona">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-neutral-900">Clasificación Triple Corona</h2><h3 className="text-center text-lg font-semibold text-neutral-700">Luego de la 3era fecha</h3>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3"><Link to="/triple-corona/resultados-6k" className="rounded-xl border border-lime-300 bg-lime-50 p-8 text-center shadow-sm hover:bg-lime-100"><h3 className="text-2xl font-bold uppercase tracking-[0.2em] text-lime-800">6k</h3></Link><Link to="/triple-corona/resultados-12k" className="rounded-xl border border-lime-300 bg-lime-50 p-8 text-center shadow-sm hover:bg-lime-100"><h3 className="text-2xl font-bold uppercase tracking-[0.2em] text-lime-800">12k</h3></Link><Link to="/triple-corona/resultados-21k" className="rounded-xl border border-lime-300 bg-lime-50 p-8 text-center shadow-sm hover:bg-lime-100"><h3 className="text-2xl font-bold uppercase tracking-[0.2em] text-lime-800">21k</h3></Link></div>
      </section>
    </div>
  )
}

export default TripleCorona2026