import PropTypes from "prop-types"
import "../sass/home.scss"

function Banner({ image, text }) {
    return (
        <div className="banner-container">
            <img src={image} alt="Bannière" className="banner-img" />
            {text && <h1 className="banner-text">{text}</h1>}
        </div>
    )
}


Banner.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string,
}

export default Banner
