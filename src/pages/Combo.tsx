function ComboPage() {
	return (
		<div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-6">
			<header className="mb-8 text-center">
				<h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
					Combo Colonia 10K
				</h2>
				<h2 className="mt-2 text-xl font-semibold text-lime-600 sm:text-2xl">Campeonato</h2>
				<h2 className="mt-1 text-sm font-medium uppercase tracking-[0.3em] text-neutral-300 sm:text-base">
					5 etapas
				</h2>
			</header>

			<section className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-label="Etapas de Combo Colonia 10K">
				<a
					href="https://cronometrajeinstantaneo.com/inscripciones/combo-10k-colonia"
					target="_blank"
					rel="noreferrer"
					className="block rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl"
				>
					<h6 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600">1era Etapa</h6>
					<h3 className="text-xl font-semibold text-neutral-900">8 de agosto</h3>
					<h1 className="mt-1 text-2xl font-bold text-neutral-900">Nueva Helvecia</h1>
					<p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-lime-700">
						Inscripciones Abiertas
					</p>
				</a>

				<article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl">
					<h6 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600">2da Etapa</h6>
					<h3 className="text-xl font-semibold text-neutral-900">5 de setiembre</h3>
					<h1 className="mt-1 text-2xl font-bold text-neutral-900">Miguelete</h1>
				</article>

				<article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl">
					<h6 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600">3era Etapa</h6>
					<h3 className="text-xl font-semibold text-neutral-900">3 de octubre</h3>
					<h1 className="mt-1 text-2xl font-bold text-neutral-900">Juan Lacaze</h1>
				</article>

				<article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl">
					<h6 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600">4ta Etapa</h6>
					<h3 className="text-xl font-semibold text-neutral-900">7 de noviembre</h3>
					<h1 className="mt-1 text-2xl font-bold text-neutral-900">Conchillas</h1>
				</article>

				<article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl sm:col-span-2 lg:col-span-1">
					<h6 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600">5ta Etapa</h6>
					<h3 className="text-xl font-semibold text-neutral-900">16 de enero</h3>
					<h1 className="mt-1 text-2xl font-bold text-neutral-900">Santa Ana</h1>
				</article>
			</section>
		</div>
	)
}

export default ComboPage
