import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/LOGO.png'

// Conteneur du header
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
`;

// Logo
const Logo = styled.img`
  height: 50px;
`;

// Nav pour les liens
const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

// Chaque lien
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 500;

  &:hover {
    color: #ff5a5f; // exemple de hover
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={logo} alt="Logo Kasa" />
      </Link>
      <NavLinks>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
      </NavLinks>
    </HeaderContainer>
  )
}

export default Header
