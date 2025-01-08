import React, { useState } from 'react';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import PropTypes from 'prop-types';
import './HeaderBackground.scss';

const HeaderBackground = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    };

    const { title, description, image } = slides[currentIndex];

    return (
        <div className="main-background">
            <img src={image} alt={title} className="slide-background" />
            <div className="slideshow">
                <div className="slideshow-inner">
                    <div className="slide-content">
                        <div className="slide-title">{title}</div>
                        <div className="slide-text">{description}</div>
                    </div>
                    <div className="pagination">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`item ${index === currentIndex ? 'is-active' : ''}`}
                            />
                        ))}
                    </div>
                    <div className="arrows">
                        <div className="arrow prev" onClick={goToPrevious}>
                            <GrFormPrevious/>
                        </div>
                        <div className="arrow next" onClick={goToNext}>
                            <MdOutlineNavigateNext/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

HeaderBackground.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default HeaderBackground;
