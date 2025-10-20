import '../sass/error.scss';
import { Link } from "react-router-dom"

function Error() {
  return (
    <main>
      <h1>404</h1>
      <p className="dontExistContent">Oups! La page que vous demandez n'existe pas.</p>
      <Link to ="/" className="returnMainPage">Retourner sur la page d'accueil</Link>
    </main>

  )
}

export default Error


