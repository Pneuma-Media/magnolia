import React from 'react';
import styles from './ApplyTemplate.module.scss';
import bgImg from '../../assets/img/homePage/bgHomePage.jpg';
import Form from './Form/Form';


const ApplyTemplate = ({ register, submit }) => {
    return (
        <div className={styles.ApplyTemplate}>


            <div className={styles.ApplyTemplate__titleBlock}>
                <div className={styles.filter}></div>
                <img className={styles.bgImg} src={bgImg} alt="bgImg" />
                <div className={styles.wrapTitle}>
                    <p className={styles.title}>Time To Apply</p>
                    <p className={styles.subTitle}>to gs countyard communities</p>
                </div>

            </div>

            <div className={styles.ApplyTemplate__wrapForm}>
                <Form
                    register={register}
                    submit={submit}
                />
            </div>

        </div>
    );
};

export default ApplyTemplate;
