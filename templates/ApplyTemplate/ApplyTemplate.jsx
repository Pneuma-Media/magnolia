import React from 'react';
import styles from './ApplyTemplate.module.scss';
import bgImg from '../../assets/img/homePage/bgHomePage.jpg';
import Form from './Form/Form';
import Button from '../../components/UI/Button/Button';
import Router from 'next/router';


const ApplyTemplate = ({ errors, register, submit, isCompleted }) => {
    let formContent = (
        <Form
            register={register}
            submit={submit}
            errors={errors}
        />
    );

    if (isCompleted) formContent = (
        <div className={styles.thankyou}>
            <h3>Thank you!</h3>
            <Button text="Restart" noArrow style={{ height: 50, width: '100%' }} onclick={() => Router.replace('/')} />
        </div>
    );

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
                {formContent}
            </div>

        </div>
    );
};

export default ApplyTemplate;
