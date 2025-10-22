import '../sass/home.scss'
import Banner from '../components/Banner.jsx'
import Cards from '../components/Cards.jsx'
import homeBackground from "../assets/HomeBackground.png"

function Home() {
  return (
    <main>
      <Banner image={homeBackground} text="Chez vous, partout et ailleurs"/>
      <Cards />
    </main>
  )
}

export default Home
