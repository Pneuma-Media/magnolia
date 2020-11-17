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
                        onclick={() => Router.push('/choose_your_spot')}
                    />
                </div>
            </div>

        </div>
    );
};

export default HomeTemplate;