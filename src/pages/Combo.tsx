import { useState } from 'react'
import Resultados5k from '../Combo/Resultados5k'
import Resultados10k from '../Combo/Resultados10k'

function ComboPage() {
	const [distancia, setDistancia] = useState<'5K' | '10K'>('5K')

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
				<article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl">
					<h1 className="mt-1 text-2xl font-bold text-neutral-900">Juan Lacaze</h1>
					<h6 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600">3era Etapa</h6>
					<h3 className="text-xl font-semibold text-neutral-900">3 de octubre</h3>
					<a
						href="https://cronometrajeinstantaneo.com/inscripciones/combo-10k-colonia-3"
						target="_blank"
						rel="noreferrer"
						className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl border border-lime-500 bg-lime-500 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-lime-600"
					>
						Inscripciones abiertas
					</a>
				</article>

				<article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl">
					<h1 className="mt-1 text-2xl font-bold text-neutral-900">Miguelete</h1>
					<h6 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600">2da Etapa</h6>
					<h3 className="text-xl font-semibold text-neutral-900">5 de setiembre</h3>
					<div className="mt-5 grid grid-cols-1 gap-3 text-sm font-semibold uppercase tracking-[0.2em] sm:grid-cols-2">
						<a
							href="https://cronometrajeinstantaneo.com/resultados/combo-10k-colonia-2/filtros"
							target="_blank"
							rel="noreferrer"
							className="flex min-h-16 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-4 py-4 text-lime-800 transition-colors duration-200 hover:bg-lime-100"
						>
							Resultados Generales
						</a>
						<a
							href="https://cronometrajeinstantaneo.com/resultados/combo-10k-colonia-2/consulta"
							target="_blank"
							rel="noreferrer"
							className="flex min-h-16 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-4 py-4 text-lime-800 transition-colors duration-200 hover:bg-lime-100"
						>
							Resultados Individuales
						</a>
					</div>
				</article>

				<article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl">
					<h1 className="mt-1 text-2xl font-bold text-neutral-900">Nueva Helvecia</h1>
					<h6 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600">1era Etapa</h6>
					<h3 className="text-xl font-semibold text-neutral-900">8 de agosto</h3>
					<div className="mt-5 grid grid-cols-1 gap-3 text-sm font-semibold uppercase tracking-[0.2em] sm:grid-cols-2">
						<a
							href="https://cronometrajeinstantaneo.com/resultados/combo-10k-colonia/generales"
							target="_blank"
							rel="noreferrer"
							className="flex min-h-16 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-4 py-4 text-lime-800 transition-colors duration-200 hover:bg-lime-100"
						>
							Resultados Generales
						</a>
						<a
							href="https://cronometrajeinstantaneo.com/resultados/combo-10k-colonia/consulta"
							target="_blank"
							rel="noreferrer"
							className="flex min-h-16 items-center justify-center rounded-xl border border-lime-300 bg-lime-50 px-4 py-4 text-lime-800 transition-colors duration-200 hover:bg-lime-100"
						>
							Resultados Individuales
						</a>
					</div>
				</article>

				<article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl">
					<h1 className="mt-1 text-2xl font-bold text-neutral-900" translate="no">Conchillas</h1>
					<h6 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600">4ta Etapa</h6>
					<h3 className="text-xl font-semibold text-neutral-900">7 de noviembre</h3>
				</article>

				<article className="rounded-2xl border border-lime-200 bg-white p-6 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl sm:col-span-2 lg:col-span-1">
					<h1 className="mt-1 text-2xl font-bold text-neutral-900">Santa Ana</h1>
					<h6 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-600">5ta Etapa</h6>
					<h3 className="text-xl font-semibold text-neutral-900">16 de enero</h3>
				</article>
			</section>

			<section className="mt-10 w-full" aria-labelledby="resultados-campeonato">
				<div className="mb-4 text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-500">Combo Colonia 26/27</p>
					<h2 id="resultados-campeonato" className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">Resultados Campeonato</h2>
					<div className="mt-4 inline-flex border border-lime-400" role="group" aria-label="Elegir distancia">
						<button type="button" onClick={() => setDistancia('5K')} className={`px-6 py-3 font-bold transition-colors ${distancia === '5K' ? 'bg-lime-500 text-white' : 'bg-white text-neutral-800 hover:bg-lime-50'}`}>5K</button>
						<button type="button" onClick={() => setDistancia('10K')} className={`px-6 py-3 font-bold transition-colors ${distancia === '10K' ? 'bg-lime-500 text-white' : 'bg-white text-neutral-800 hover:bg-lime-50'}`}>10K</button>
					</div>
				</div>
				{distancia === '5K' ? <Resultados5k /> : <Resultados10k />}
			</section>
		</div>
	)
}

export default ComboPage
