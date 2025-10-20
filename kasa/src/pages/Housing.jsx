import { useParams, Navigate } from 'react-router-dom';
import housingList from '../data/data.js';
import Slideshow from '../components/Slideshow.jsx';
import Collapse from '../components/Collapse.jsx';
import '../sass/housing.scss';

function Housing() {
  const { id } = useParams();
  const housing = housingList.find(item => item.id === id);

  if (!housing) return <Navigate to="/error" />;

  return (
    <div className="housing">
      <Slideshow images={housing.pictures} />

      <div className="descriptionBox">
        <div className="titleTownSpecificities">
          <h1>{housing.title}</h1>
          <p>{housing.location}</p>
          <ul className="tags">
            {housing.tags.map((tag, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="hostRating">
          <p>Hôte : {housing.host.name}</p>
          <p>Rating : {housing.rating}</p>
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
