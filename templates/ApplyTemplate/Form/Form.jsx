import React from 'react';
import styles from './Form.module.scss';
import Button from '../../../components/UI/Button/Button';


const Form = ({ register, submit }) => {
    return (
        <div className={styles.Form}>
            <p className={styles.Form__title}>
                Please Fill Out The Form Below To Apply
            </p>

            <div className={styles.Form__block1}>
                <div className={styles.wrap}>
                    <span className={styles.Form__label}>First Name</span>
                    <input
                        type="text"
                        name='FirstName'
                        ref={register}
                    />
                </div>
                <div className={styles.wrap}>
                    <span className={styles.Form__label}>Last Name</span>
                    <input
                        type="text"
                        name='LastName'
                        ref={register}
                    />
                </div>
            </div>
            <div className={styles.Form__block2}>
                <span className={styles.Form__label}>Email</span>
                <input
                    type="Email"
                    name='Email'
                    ref={register}
                />
            </div>
            <div className={styles.Form__block3}>
                <span className={styles.Form__label}>Anything you'd like to add?</span>
                <textarea 
                name="Description" 
                ref={register}
                id="" 
                cols="30" 
                rows="10"
                ></textarea>
            </div>

            <Button
                text='Click here to apply for new home'
                style={{ height: '70px', width: '100%' }}
                theme2
                onclick={submit}
            />

        </div>
    );
};

export default Form;
