import archivo from './Campeonato/CAMP10cat.pdf'
import ResultadosCampeonato from './ResultadosCampeonato'

function Resultados10k() {
	return <ResultadosCampeonato distancia="10K" archivo={archivo} />
}

export default Resultados10k
