import Banner from '../components/Banner.jsx'
import Collapse from '../components/Collapse.jsx'
import aboutBackground from "../assets/aboutBackground.png"


function About() {
  return (
    <main>
      <Banner image={aboutBackground}/>
      <div className="collapses-container">
        <Collapse title="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
        <Collapse title="Respect" description ="La bienveillance fait partie des valeurs fondamentales de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
        <Collapse title="Service" description ="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." />
        <Collapse title="Sécurité" description ="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissance une note aussi bien qu'à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
      </div>
    </main>
)}


export default About
