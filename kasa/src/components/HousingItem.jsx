function HousingItem({ title, cover }) {
	return (
        <div>
			<h2 className='housing-name'>{title}</h2>
			<img className='housing-img' src={cover} alt={`${title}`} />
        </div>
	)
}

export default HousingItem