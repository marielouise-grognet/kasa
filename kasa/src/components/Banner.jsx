import background from '../assets/Background.png'

function Banner() {
    return (
        <div className="banner-container">
            <img src={background} alt="Background" className="banner-img" />
            <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner