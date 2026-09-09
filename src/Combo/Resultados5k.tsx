import archivo from './Campeonato/CAMP5cat.pdf'
import ResultadosCampeonato from './ResultadosCampeonato'

function Resultados5k() {
	return <ResultadosCampeonato distancia="5K" archivo={archivo} />
}

export default Resultados5k
