import { NavLink } from 'react-router-dom'
import logo from '../assets/LOGO.png'
import '../sass/index.scss'

function Header() {
  return (
    <nav className="navbar">
      <NavLink to="/"><img src={logo} alt="Logo Kasa" className="logo" /></NavLink>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} end>Accueil</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>A propos</NavLink>
      </div>
    </nav>
  )
}

export default Header
