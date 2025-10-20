import { useState } from 'react';
import '../sass/slideshow.scss';

function Slideshow({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = images.length;

    if (!Array.isArray(images) || length === 0) return null;

    const nextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    };

    return (
        <div className="slideshow">
            {length > 1 && (
                <>
                    <button className="arrowLeft" onClick={prevSlide}>&#10094;</button>
                    <button className="arrowRight" onClick={nextSlide}>&#10095;</button>
                    <div className="counter">{currentIndex + 1} / {length}</div>

                </>
            )}

            <div className="slide">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
        </div>
    );
}

export default Slideshow;
