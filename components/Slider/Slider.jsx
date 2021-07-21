import React from 'react';
import styles from './Slider.module.scss';
import Carousel from 'react-multi-carousel';
import ItemSlider from '../ItemSlider/ItemSlider';
import imgSlider from '../../assets/img/selectFloorplan/img25.jpg';
import leftArrow from '../../assets/img/icons/arrow/left-arrow.svg';
import rightArrow from '../../assets/img/icons/arrow/right-arrow.svg';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        //slidesToSlide: 3 // optional, default to 1.
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
                <img src={rightArrow} alt="rightArrow" />
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
            <button className={styles.leftArrow} onClick={() => onClick()}>
                <img src={leftArrow} alt="leftArrow" />
            </button>
        </>
    )
}

const Slider = ({ images }) => {
    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            showDots={true}
            arrows={true}
            customRightArrow={<RightArrow />}
            customLeftArrow={<LeftArrow />}
            itemClass="itemClass"
            dotListClass="dotListClass_PopupCase"
            containerClass="containerMasters_PopupCase"

        >

            {
                images.map((data, i) => {
                    return (
                        <ItemSlider
                            key={i}
                            imgSlider={data}
                        />
                    )
                })
            }

        </Carousel>
    )
}

export default Slider;

