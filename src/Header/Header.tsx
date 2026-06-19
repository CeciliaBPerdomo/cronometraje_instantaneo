import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="w-full bg-white py-4">
      <div className="mx-auto flex w-full max-w-6xl justify-center px-4">
        <Link to="/" aria-label="Ir al inicio">
          <img src={logo} alt="Logo" className="h-32 w-auto sm:h-40" />
        </Link>
      </div>
    </header>
  )
}

export default Header