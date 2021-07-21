import React from 'react';
import styles from './HomeTemplate.module.scss';
import bgImg from '../../assets/img/homePage/bgHomePage.jpg';
import Button from '../../components/UI/Button/Button';
import Router from 'next/router';


const HomeTemplate = () => {


    return (
        <div className={styles.HomeTemplate}>
            <img className={styles.HomeTemplate__img} src={bgImg} alt="bgImg" />
            <div className={styles.HomeTemplate__background}></div>

            <div className={styles.HomeTemplate__centerBlock}>
                <p className={styles.HomeTemplate__title}>Welcome!</p>
                <p className={styles.HomeTemplate__subTitle}>TO GS COURTYARD COMMUNITIES</p>
                <div className={styles.HomeTemplate__wrapButton}>
                    <Button
                        text='Click here to build your next home'
                        onclick={() => Router.replace('/choose_your_spot')}
                        style={{ height: '70px' }}
                    />
                </div>
            </div>
            <div className={styles.disclaimer}>
                Please note: This application is still in early development and may be subject to bugs. Your feedback and understanding is appreciated!
            </div>
        </div>
    );
};

export default HomeTemplate;