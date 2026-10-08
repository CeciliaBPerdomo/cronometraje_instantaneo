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
  const expresionFila = /^(.+?)\s+([FM])\s+(\d+)\s+10\s*([FM])\s*\|\s*(\d{2}-\d{2})\s+(\d+)\s+((?:\d+\s+)*\d+)$/

  return texto.split('\n').flatMap((linea) => {
    const coincidencia = linea.trim().replace(/\s+/g, ' ').match(expresionFila)
    if (!coincidencia) return []
    const puntajes = coincidencia[7].split(' ')

    return [{
      nombre: coincidencia[1].trim(),
      genero: coincidencia[2] as 'F' | 'M',
      edad: Number(coincidencia[3]),
      categoria: `${coincidencia[4]} | ${coincidencia[5]}`,
      posCat: Number(coincidencia[6]),
      puntaje: Number(puntajes.at(-1)),
    }]
  })
}

const normalizarTexto = (texto: string) =>
  texto
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

function ResultadosCampeonato({ distancia, archivo }: ResultadosCampeonatoProps) {
  const [resultados, setResultados] = useState<Resultado[]>([])
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('Todas')
  const [estado, setEstado] = useState<'cargando' | 'listo' | 'error'>('cargando')

  useEffect(() => {
    let activo = true
    setEstado('cargando')
    setResultados([])
    setCategoria('Todas')

    const cargarResultados = async () => {
      try {
        const documento = await getDocument(archivo).promise
        const paginas = await Promise.all(
          Array.from({ length: documento.numPages }, async (_, indice) => {
            const pagina = await documento.getPage(indice + 1)
            const contenido = await pagina.getTextContent()
            const lineas: { y: number; fragmentos: { x: number; texto: string }[] }[] = []
            for (const item of contenido.items) {
              if (!('str' in item) || !item.str.trim()) continue
              const y = item.transform[5]
              let linea = lineas.find((fila) => Math.abs(fila.y - y) < 2)
              if (!linea) {
                linea = { y, fragmentos: [] }
                lineas.push(linea)
              }
              linea.fragmentos.push({ x: item.transform[4], texto: item.str })
            }
            return lineas.sort((a, b) => b.y - a.y).map((linea) =>
              linea.fragmentos.sort((a, b) => a.x - b.x).map((fragmento) => fragmento.texto).join(' '),
            ).join('\n')
          }),
        )

        const filas = paginas.flatMap(extraerResultados)
        if (filas.length === 0) throw new Error('El PDF no contiene filas reconocibles')

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
      </header>

        <div className="mb-5 grid gap-3 border border-lime-100 bg-lime-50/50 p-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1 text-sm font-semibold text-neutral-800">
            Buscar corredor
            <input
              type="search"
              value={busqueda}
              onChange={(event) => setBusqueda(event.target.value)}
              placeholder="Nombre o apellido"
              autoComplete="off"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              enterKeyHint="search"
              className="min-h-12 w-full min-w-0 rounded-lg border border-lime-300 bg-white px-3 py-2 text-[16px] font-normal outline-none focus:border-lime-600 focus:ring-2 focus:ring-lime-200"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm font-semibold text-neutral-800">
            Categoría
            <select
              value={categoria}
              onChange={(event) => setCategoria(event.target.value)}
              className="min-h-12 w-full min-w-0 rounded-lg border border-lime-300 bg-white px-3 py-2 text-[16px] font-normal outline-none focus:border-lime-600 focus:ring-2 focus:ring-lime-200"
            >
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