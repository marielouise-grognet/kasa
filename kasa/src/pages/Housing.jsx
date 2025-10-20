import { useParams, Navigate } from 'react-router-dom'
import housingList from '../data/data.js'
import Slideshow from '../components/Slideshow.jsx'
import Collapse from '../components/Collapse.jsx'
import '../sass/housing.scss'

function Housing() {
  const { id } = useParams()
  const housing = housingList.find(item => item.id === id)
  const range = [1, 2, 3, 4, 5]



  if (!housing) return <Navigate to="/error" />;

  return (
    <div className="housing">
      <Slideshow images={housing.pictures} />

      <div className="descriptionBox">
        <div className="titleTownSpecificities">
          <h1>{housing.title}</h1>
          <p>{housing.location}</p>
          <div className="tags">
            {housing.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="hostAndRating">
          <div className="hostIdentity">
            <p className='hostName'>{housing.host.name}</p>
            <img src={housing.host.picture} className='hostPicture'></img>
          </div>
          <div className="rating">
            {range.map((star) => (
              <span key={star} className={star <= housing.rating ? "star filled" : "star"}>★</span>
            ))}
          </div>


        </div>
      </div>

      <div className="collapses">
        <Collapse title="Description" description={housing.description} />
        <Collapse
          title="Équipements"
          description={housing.equipments.map((eq, i) => (
            <div key={i}>{eq}</div>
          ))}
        />
      </div>

    </div>
  )
}

export default Housing;
