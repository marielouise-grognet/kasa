import { Link } from 'react-router-dom'
import logo from '../assets/LOGOwhite.png'
import '../sass/index.scss'

function Footer() {
  return (
    <div className="footer">
      <Link to="/"><img src={logo} alt="Logo kasa" /></Link>
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer