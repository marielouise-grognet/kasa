import { Link } from 'react-router-dom'
import HousingItem from './HousingItem.jsx'
import '../sass/cards.scss'
import useHousing from '../hook/useHousing'


function Cards() {
    const { housingList, loading, error } = useHousing()

    if (loading) return <p>Chargement...</p>
    if (error) return <p>Erreur lors du chargement des logements.</p>

    return (
        <div className="gallery">
            {housingList.map(({ id, title, cover }) => (
                <Link key={id} to={`/housing/${id}`} className="card">
                    <HousingItem title={title} cover={cover} />
                </Link>
            ))}
        </div>
    )
}

export default Cards
