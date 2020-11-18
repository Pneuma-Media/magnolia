import React from 'react';
import styles from './Slider.module.scss';
import Carousel from 'react-multi-carousel';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
      },
};


const RightArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;

    return (
        <>
            <button className={styles.PopupCase__arrow} onClick={() => onClick()}>
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z" fill="#2C2E3A" />
                </svg>
            </button>
        </>
    )
};

const LeftArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;

    return (
        <>
            <button className={[styles.PopupCase__arrow, styles.leftArrow].join(' ')} onClick={() => onClick()}>
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z" fill="#2C2E3A" />
                </svg>
            </button>
        </>
    )
}

const Slider = () => {
    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            showDots={true}
            arrows={true}
            customRightArrow={<RightArrow />}
            customLeftArrow={<LeftArrow />}
            // itemClass="ReactCarousel_PopupCase"
            // dotListClass="dotListClass_PopupCase"
            containerClass="containerMasters_PopupCase"

        >
           <div className={styles.item}>1</div>
           <div className={styles.item}>2</div>
           <div className={styles.item}>3</div>
           <div className={styles.item}>4</div>
           
        </Carousel>
    )
}

export default Slider;

