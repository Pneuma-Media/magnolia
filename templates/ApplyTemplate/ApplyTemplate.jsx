import React from 'react';
import styles from './ApplyTemplate.module.scss';
import bgImg from '../../assets/img/homePage/bgHomePage.jpg';
import Form from './Form/Form';


const ApplyTemplate = () => {
    return (
        <div className={styles.ApplyTemplate}>
            <div className={styles.ApplyTemplate__filter}></div>
            <img className={styles.ApplyTemplate__bgImg} src={bgImg} alt="bgImg" />

            <div className={styles.ApplyTemplate__titleBlock}>
                <p className={styles.ApplyTemplate__title}>Time To Apply</p>
                <p className={styles.ApplyTemplate__subTitle}>to gs countyard communities</p>
            </div>

            <div className={styles.ApplyTemplate__wrapForm}>
                <Form />
            </div>

        </div>
    );
};

export default ApplyTemplate;
