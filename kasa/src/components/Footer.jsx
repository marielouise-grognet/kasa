import { Link } from 'react-router-dom'
import logo from '../assets/LOGOwhite.png'

function Footer() {
  return (
    <div style = {{
        backgroundColor : '#000'
    }}>
        <Link to ="/">
            <img src={logo} alt="Logo kasa" />
        </Link>
      <p style ={{
        color:'#fff'
      }}>C 2020 Kasa. All rights reserved
      </p>
    </div>
  )
}

export default Footer