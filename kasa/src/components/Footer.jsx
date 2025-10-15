import { Link } from 'react-router-dom'
import logo from '../assets/LOGOwhite.png'
import '../index.css'

function Footer() {
  return (
    <div className="footer">
        <Link to ="/">
            <img src={logo} alt="Logo kasa" />
        </Link>
      <p style ={{
        color:'#fff'
      }}>© 2020 Kasa. All rights reserved
      </p>
    </div>
  )
}

export default Footer