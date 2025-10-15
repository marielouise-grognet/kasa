import housingList from '../data/data.js'
import HousingItem from '../components/HousingItem.jsx'
import '../sass/card.scss'

function Card() {
    return (
        <div className ="gallery">
            {housingList.map(({ id, title, cover }) =>
                <div key={id} className="card">
                    <HousingItem
                        title={title}
                        cover={cover}
                    />
                </div>
            )}
        </div>
    )
}

export default Card 