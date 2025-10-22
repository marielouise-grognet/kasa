import { useParams, Navigate } from 'react-router-dom'
import useHousing from '../hook/useHousing.js'
import Slideshow from '../components/Slideshow.jsx'
import Collapse from '../components/Collapse.jsx'
import '../sass/housing.scss'

function Housing() {
  const { id } = useParams()
  const { housingList, loading, error } = useHousing()
  const range = [1, 2, 3, 4, 5]

  const housing = housingList.find(item => item.id === id)

  if (loading) return <p>Chargement...</p>
  if (error || !housing) return <Navigate to="/*" />



  return (
    <div className="main">
      <Slideshow images={housing.pictures} />
      <div className="general-content">
        <div className="housing-characteristic">
          <h1 className="housing-title">{housing.title}</h1>
          <p>
            {(() => {
              const parts = housing.location.split(' - ')
              if (parts.length === 2) {
                const [region, city] = parts
                return `${city.trim()}, ${region.trim().replace(' ', '-')}`
              }
              return housing.location
            })()}
          </p>

          <div className="tags">
            {housing.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="host-rating-container">
          <div className="host-info">
            <p className='host-name'>{housing.host.name}</p>
            <img src={housing.host.picture} alt={housing.host.name} className='host-picture' />
          </div>

          <div className="rating">
            {range.map(star => (
              <span key={star} className={star <= housing.rating ? "star-filled" : "star-empty"}>★</span>
            ))}
          </div>
        </div>
      </div>

      <div className="collapses">
        <Collapse title="Description" description={housing.description} />
        <Collapse
          title="Équipements"
          description={housing.equipments.map((eq, i) => <div key={i}>{eq}</div>)}
        />
      </div>
    </div>
  )
}

export default Housing
