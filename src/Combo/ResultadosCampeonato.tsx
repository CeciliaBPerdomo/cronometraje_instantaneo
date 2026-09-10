import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import { useEffect, useState } from 'react'

GlobalWorkerOptions.workerSrc = workerSrc

type Resultado = {
  nombre: string
  genero: 'F' | 'M'
  edad: number
  categoria: string
  posCat: number
  puntaje: number
}

type ResultadosCampeonatoProps = {
  distancia: '5K' | '10K'
  archivo: string
}

const extraerResultados = (texto: string): Resultado[] => {
  const indiceEncabezado = texto.lastIndexOf('TOTAL')
  const textoResultados = indiceEncabezado === -1 ? texto : texto.slice(indiceEncabezado + 5)
  const expresionFila = /([A-Za-zÁÉÍÓÚÜÑáéíóúüñ][A-Za-zÁÉÍÓÚÜÑáéíóúüñ .'’-]*?)([FM])\s*(\d{2})\s*10\s*([FM])\s*\|\s*(\d{2}-\d{2})/g
  const coincidencias = [...textoResultados.matchAll(expresionFila)]

  const posicionesPorCategoria = new Map<string, number>()

  return coincidencias.map((coincidencia, indice) => {
    const finalCategoria = (coincidencia.index ?? 0) + coincidencia[0].length
    const inicioSiguienteFila = coincidencias[indice + 1]?.index ?? textoResultados.length
    const valores = textoResultados.slice(finalCategoria, inicioSiguienteFila).replace(/\D/g, '')

    const categoria = `${coincidencia[4]} | ${coincidencia[5]}`
    const posCat = (posicionesPorCategoria.get(categoria) ?? 0) + 1
    posicionesPorCategoria.set(categoria, posCat)

    return {
      nombre: coincidencia[1].trim(),
      genero: coincidencia[2] as 'F' | 'M',
      edad: Number(coincidencia[3]),
      categoria,
      posCat,
      puntaje: Number(valores.slice(-4)),
    }
  })
}

const normalizarTexto = (texto: string) =>
  texto
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

const asignarPosicionesCategoria = (filas: Resultado[]) => {
  const posicionesPorCategoria = new Map<string, number>()

  return filas.map((fila) => {
    const posCat = (posicionesPorCategoria.get(fila.categoria) ?? 0) + 1
    posicionesPorCategoria.set(fila.categoria, posCat)
    return { ...fila, posCat }
  })
}

function ResultadosCampeonato({ distancia, archivo }: ResultadosCampeonatoProps) {
  const [resultados, setResultados] = useState<Resultado[]>([])
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('Todas')
  const [estado, setEstado] = useState<'cargando' | 'listo' | 'error'>('cargando')

  useEffect(() => {
    let activo = true

    const cargarResultados = async () => {
      try {
        const documento = await getDocument(archivo).promise
        const paginas = await Promise.all(
          Array.from({ length: documento.numPages }, async (_, indice) => {
            const pagina = await documento.getPage(indice + 1)
            const contenido = await pagina.getTextContent()
            return contenido.items
              .filter((item) => 'str' in item)
              .map((item) => item.str)
              .join('')
          }),
        )

        const filas = asignarPosicionesCategoria(paginas.flatMap(extraerResultados))

        if (activo) {
          setResultados(filas)
          setEstado('listo')
        }
      } catch {
        if (activo) {
          setEstado('error')
        }
      }
    }

    void cargarResultados()
    return () => {
      activo = false
    }
  }, [archivo])

  const categorias = [...new Set(resultados.map((resultado) => resultado.categoria))].sort((primera, segunda) =>
    primera.localeCompare(segunda, undefined, { numeric: true }),
  )
  const textoBuscado = normalizarTexto(busqueda.trim())
  const resultadosFiltrados = resultados.filter((resultado) =>
    (categoria === 'Todas' || resultado.categoria === categoria) &&
    (textoBuscado.length === 0 || normalizarTexto(resultado.nombre).includes(textoBuscado)),
  )

  return (
    <div className="px-4 pb-4 sm:px-6 sm:pb-6">
      <header className="mb-5 text-center">
        <p className="text-sm font-semibold text-neutral-700">Clasificación {distancia}</p>
        <a href={archivo} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm font-semibold text-lime-700 underline hover:text-lime-900">
          Ver clasificación oficial en PDF
        </a>
      </header>

        <div className="mb-5 grid gap-3 border border-lime-100 bg-lime-50/50 p-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1 text-sm font-semibold text-neutral-800">
            Buscar corredor
            <input value={busqueda} onChange={(event) => setBusqueda(event.target.value)} placeholder="Nombre o apellido" className="border border-lime-300 bg-white px-3 py-2 font-normal outline-none focus:border-lime-600" />
          </label>
          <label className="flex flex-col gap-1 text-sm font-semibold text-neutral-800">
            Categoría
            <select value={categoria} onChange={(event) => setCategoria(event.target.value)} className="border border-lime-300 bg-white px-3 py-2 font-normal outline-none focus:border-lime-600">
              <option>Todas</option>
              {categorias.map((opcion) => <option key={opcion}>{opcion}</option>)}
            </select>
          </label>
        </div>

        {estado === 'cargando' && <p className="py-8 text-center text-neutral-600">Cargando clasificación oficial...</p>}
        {estado === 'error' && <p className="py-8 text-center text-neutral-600">No fue posible cargar los resultados. Consulte el PDF oficial.</p>}
        {estado === 'listo' && (
          <>
            <div className="overflow-x-auto border border-lime-100">
              <table className="min-w-full text-sm">
                <thead className="bg-lime-100 text-neutral-800"><tr><th className="px-3 py-2 text-left">P. Cat.</th><th className="px-3 py-2 text-left">Corredor</th><th className="px-3 py-2 text-center">Género</th><th className="px-3 py-2 text-center">Edad</th><th className="px-3 py-2 text-center">Categoría</th><th className="px-3 py-2 text-center">Puntaje</th></tr></thead>
                <tbody>{resultadosFiltrados.map((resultado, indice) => <tr key={`${resultado.nombre}-${resultado.categoria}-${indice}`} className="border-t border-lime-100 odd:bg-white even:bg-lime-50/40"><td className="px-3 py-2">{resultado.posCat}</td><td className="px-3 py-2 font-medium text-neutral-900">{resultado.nombre}</td><td className="px-3 py-2 text-center">{resultado.genero === 'F' ? 'Femenino' : 'Masculino'}</td><td className="px-3 py-2 text-center">{resultado.edad}</td><td className="px-3 py-2 text-center">{resultado.categoria}</td><td className="px-3 py-2 text-center font-semibold">{resultado.puntaje}</td></tr>)}</tbody>
              </table>
            </div>
            <p className="mt-3 text-center text-sm text-neutral-600">Mostrando {resultadosFiltrados.length} de {resultados.length} corredores.</p>
          </>
        )}
    </div>
  )
}

export default ResultadosCampeonato