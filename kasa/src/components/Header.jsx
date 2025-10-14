import { Link } from 'react-router-dom'
import logo from '../assets/LOGO.png'
import '../sass/header.scss'


function Header() {
  return (
    <nav className="navbar">
      <Link to="/"><img src={logo} alt="Logo Kasa" /></Link>
      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </div>
    </nav>
  );
}

export default Header