import './App.scss'
import background from './assets/Background.png'
import housingList from './data/data.js'
import HousingItem from './components/HousingItem.jsx'

function App() {
  return (
    <main>
      <div className="banner-container">
        <img src={background} alt="Background" className="banner-img" />
        <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="gallery">
        {housingList.map(({ id, title, cover }) =>
          <div key={id}>
            <HousingItem
              title={title}
              cover={cover}
            />
          </div>
      )}

          </div>
    </main>
  )
}

export default App
