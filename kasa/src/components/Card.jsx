import { Link } from 'react-router-dom'
import housingList from '../data/data.js'
import HousingItem from '../components/HousingItem.jsx'
import '../sass/card.scss'

function Card() {
    return (
        <div className ="gallery">
            {housingList.map(({ id, title, cover }) =>
                <Link key={id} to={`/housing/${id}`} className="card">
                    <HousingItem
                        title={title}
                        cover={cover}
                    />
                </Link>
            )}
        </div>
    )
}

export default Card 