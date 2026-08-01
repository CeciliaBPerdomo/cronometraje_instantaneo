import { useEffect, useMemo, useState } from 'react'
import { resultados6k } from './resultados6kData'

function Resultados6k() {
  const mostrarPuntaje = (valor: number | null) => (valor === null ? '-' : valor)
  const resultadosPorPagina = 20
  const [filtroNombre, setFiltroNombre] = useState('')
  const [filtroGenero, setFiltroGenero] = useState<'TODOS' | 'M' | 'F'>('TODOS')
  const [filtroCategoria, setFiltroCategoria] = useState('TODAS')
  const [paginaActual, setPaginaActual] = useState(1)

  const normalizarTexto = (texto: string) =>
    texto
      .toLocaleLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

  const formatearGenero = (genero: 'M' | 'F') => (genero === 'M' ? 'Masculino' : 'Femenino')

  const formatearCategoria = (categoria: string) => {
    const separador = categoria.split('|')
    if (separador.length < 2) {
      return categoria
    }

    return separador[1].trim()
  }

  const categorias = useMemo(
    () => ['TODAS', ...new Set(resultados6k.map((fila) => fila.categoria))],
    [],
  )

  const categoriasDisponibles = useMemo(() => {
    if (filtroGenero === 'TODOS') {
      return categorias
    }

    const prefijoCategoria = filtroGenero === 'F' ? '0F' : '0M'
    return categorias.filter(
      (categoria) => categoria === 'TODAS' || categoria.startsWith(prefijoCategoria),
    )
  }, [categorias, filtroGenero])

  const nombreBuscado = useMemo(() => normalizarTexto(filtroNombre.trim()), [filtroNombre])

  const coincideNombreBuscado = useMemo(
    () =>
      (nombre: string) => {
        if (nombreBuscado.length === 0) {
          return false
        }

        return normalizarTexto(nombre).includes(nombreBuscado)
      },
    [nombreBuscado],
  )

  const resultadosFiltrados = useMemo(() => {
    const resultadosBase = resultados6k.filter((fila) => {
      const coincideGenero = filtroGenero === 'TODOS' || fila.genero === filtroGenero
      const coincideCategoria = filtroCategoria === 'TODAS' || fila.categoria === filtroCategoria

      return coincideGenero && coincideCategoria
    })

    if (nombreBuscado.length === 0) {
      return resultadosBase
    }

    const categoriasConCoincidencias = new Set(
      resultadosBase
        .filter((fila) => coincideNombreBuscado(fila.nombre))
        .map((fila) => fila.categoria),
    )

    return resultadosBase.filter((fila) => categoriasConCoincidencias.has(fila.categoria))
  }, [filtroGenero, filtroCategoria, coincideNombreBuscado, nombreBuscado])

  useEffect(() => {
    setPaginaActual(1)
  }, [filtroNombre, filtroGenero, filtroCategoria])

  useEffect(() => {
    if (!categoriasDisponibles.includes(filtroCategoria)) {
      setFiltroCategoria('TODAS')
    }
  }, [categoriasDisponibles, filtroCategoria])

  const totalPaginas = Math.max(1, Math.ceil(resultadosFiltrados.length / resultadosPorPagina))
  const paginaSegura = Math.min(paginaActual, totalPaginas)
  const indiceInicio = (paginaSegura - 1) * resultadosPorPagina
  const indiceFin = indiceInicio + resultadosPorPagina
  const resultadosPaginados = resultadosFiltrados.slice(indiceInicio, indiceFin)

  const paginasVisibles = useMemo(() => {
    const paginas: number[] = []
    const primera = Math.max(1, paginaSegura - 2)
    const ultima = Math.min(totalPaginas, paginaSegura + 2)

    for (let pagina = primera; pagina <= ultima; pagina += 1) {
      paginas.push(pagina)
    }

    return paginas
  }, [paginaSegura, totalPaginas])

  return (
    <section className="mx-auto w-full max-w-6xl rounded-2xl border border-lime-200 bg-white p-4 shadow-md sm:p-6">
      <header className="mb-5 text-center">
        <h1 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
          Resultados 6K - Triple Corona
        </h1>
        <p className="mt-1 text-sm text-neutral-600 sm:text-base">
          Clasificación oficial
        </p>
      </header>

      <div className="mb-5 grid grid-cols-1 gap-3 rounded-xl border border-lime-100 bg-lime-50/40 p-3 sm:grid-cols-3 sm:p-4">
        <label className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-700">Nombre</span>
          <input
            type="text"
            value={filtroNombre}
            onChange={(event) => setFiltroNombre(event.target.value)}
            placeholder="Buscar por nombre"
            className="rounded-lg border border-lime-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none transition-colors focus:border-lime-400"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-700">Sexo</span>
          <select
            value={filtroGenero}
            onChange={(event) => setFiltroGenero(event.target.value as 'TODOS' | 'M' | 'F')}
            className="rounded-lg border border-lime-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none transition-colors focus:border-lime-400"
          >
            <option value="TODOS">Todos</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-700">Categoria</span>
          <select
            value={filtroCategoria}
            onChange={(event) => setFiltroCategoria(event.target.value)}
            className="rounded-lg border border-lime-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none transition-colors focus:border-lime-400"
          >
            {categoriasDisponibles.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria === 'TODAS' ? 'Todas' : formatearCategoria(categoria)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="overflow-x-auto rounded-xl border border-lime-100">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-lime-100 text-neutral-800">
            <tr>
              <th className="px-3 py-2 text-left font-bold">#</th>
              <th className="px-3 py-2 text-left font-bold">Nombre</th>
              <th className="px-3 py-2 text-left font-bold">Género</th>
              <th className="px-3 py-2 text-center font-bold">Categoría</th>
              <th className="px-3 py-2 text-center font-bold">Pos. Cat.</th>
              <th className="px-3 py-2 text-center font-bold">Fecha 1</th>
              <th className="px-3 py-2 text-center font-bold">Fecha 2</th>
              <th className="px-3 py-2 text-center font-bold">Fecha 3</th>
              <th className="px-3 py-2 text-center font-bold">Total</th>
            </tr>
          </thead>
          <tbody>
            {resultadosPaginados.map((fila, index) => (
              <tr
                key={`${fila.nombre}-${fila.categoria}-${indiceInicio + index}`}
                className={`border-t border-lime-100 ${
                  coincideNombreBuscado(fila.nombre) ? 'bg-lime-200/70' : 'odd:bg-white even:bg-lime-50/40'
                }`}
              >
                <td className="whitespace-nowrap px-3 py-2 text-neutral-700">{indiceInicio + index + 1}</td>
                <td className="px-3 py-2 font-medium text-neutral-900">{fila.nombre}</td>
                <td className="whitespace-nowrap px-3 py-2 text-neutral-700">{formatearGenero(fila.genero)}</td>
                <td className="whitespace-nowrap px-3 py-2 text-center text-neutral-700">{formatearCategoria(fila.categoria)}</td>
                <td className="whitespace-nowrap px-3 py-2 text-center text-neutral-700">{fila.posCat}</td>
                <td className="whitespace-nowrap px-3 py-2 text-center text-neutral-700">{mostrarPuntaje(fila.fecha1)}</td>
                <td className="whitespace-nowrap px-3 py-2 text-center text-neutral-700">{mostrarPuntaje(fila.fecha2)}</td>
                <td className="whitespace-nowrap px-3 py-2 text-center text-neutral-700">{mostrarPuntaje(fila.fecha3)}</td>
                <td className="whitespace-nowrap px-3 py-2 text-center font-semibold text-neutral-900">{fila.total}</td>
              </tr>
            ))}
            {resultadosFiltrados.length === 0 && (
              <tr className="border-t border-lime-100 bg-white">
                <td colSpan={9} className="px-3 py-6 text-center text-sm text-neutral-500">
                  No hay resultados para los filtros seleccionados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setPaginaActual((previa) => Math.max(1, previa - 1))}
          disabled={paginaSegura === 1}
          className="rounded-lg border border-lime-200 bg-white px-3 py-2 text-sm font-medium text-neutral-700 transition-colors enabled:hover:bg-lime-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Anterior
        </button>

        {paginasVisibles.map((pagina) => (
          <button
            key={pagina}
            type="button"
            onClick={() => setPaginaActual(pagina)}
            className={`rounded-lg border px-3 py-2 text-sm font-semibold transition-colors ${
              pagina === paginaSegura
                ? 'border-lime-500 bg-lime-500 text-white'
                : 'border-lime-200 bg-white text-neutral-700 hover:bg-lime-50'
            }`}
          >
            {pagina}
          </button>
        ))}

        <button
          type="button"
          onClick={() => setPaginaActual((previa) => Math.min(totalPaginas, previa + 1))}
          disabled={paginaSegura === totalPaginas}
          className="rounded-lg border border-lime-200 bg-white px-3 py-2 text-sm font-medium text-neutral-700 transition-colors enabled:hover:bg-lime-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>

      <p className="mt-3 text-center text-sm text-neutral-600">
        Mostrando {resultadosFiltrados.length === 0 ? 0 : indiceInicio + 1}-{Math.min(indiceFin, resultadosFiltrados.length)} de {resultadosFiltrados.length} resultados filtrados ({resultados6k.length} totales)
      </p>
    </section>
  )
}

export default Resultados6k