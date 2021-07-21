import React from 'react';
import styles from './Form.module.scss';
import Button from '../../../components/UI/Button/Button';
import Router from 'next/router';


const Form = ({ errors, register, submit, isLoading }) => {
    return (
        <div className={styles.Form}>

            <div className={styles.Form__wrapForm}>
                <p className={styles.Form__title}>
                    Please Fill Out The Form Below To Apply
            </p>
                <div className={styles.row}>


                    <div className={styles.wrap}>
                        <span className={styles.label}>First Name<span className={styles.asterisk}>*</span></span>
                        <input
                            type="text"
                            name='FirstName'
                            ref={register}
                        />
                        <span className={styles.errors}>{errors.FirstName?.message}</span>
                    </div>

                    <div className={styles.wrap}>
                        <span className={styles.label}>Last Name<span className={styles.asterisk}>*</span></span>
                        <input
                            type="text"
                            name='LastName'
                            ref={register}
                        />
                        <span className={styles.errors}>{errors.LastName?.message}</span>
                    </div>
                </div>
                <div className={styles.wrap}>
                    <span className={styles.label}>Phone Number<span className={styles.asterisk}>*</span></span>
                    <input
                        type="tel"
                        name='phone'
                        ref={register}
                    />
                    <span className={styles.errors}>{errors.phone?.message}</span>
                </div>
                <div className={styles.wrap}>
                    <span className={styles.label}>Email<span className={styles.asterisk}>*</span></span>
                    <input
                        type="Email"
                        name='Email'
                        ref={register}
                    />
                    <span className={styles.errors}>{errors.Email?.message}</span>
                </div>
                <div className={styles.wrap}>
                    <span className={styles.label}>Anything you'd like to add?</span>
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
                    style={{ height: '50px', width: '100%', marginBottom: '20px' }}
                    isLoading={isLoading}
                    //theme2
                    onclick={submit}
                />

                <Button
                    text='Back'
                    style={{ height: '50px', width: '100%' }}
                    theme3
                    onclick={() => Router.replace('/customize_lnterior')}
                />


            </div>



        </div>
    );
};

export default Form;
