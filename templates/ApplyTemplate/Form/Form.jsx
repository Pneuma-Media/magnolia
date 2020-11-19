import React from 'react';
import styles from './Form.module.scss';
import Button from '../../../components/UI/Button/Button';


const Form = () => {
    return (
        <div className={styles.Form}>
            <p className={styles.Form__title}>
                Please Fill Out The Form Below To Apply
            </p>

            <div className={styles.Form__block1}>
                <div className={styles.wrap}> 
                    <span>First Name</span>
                    <input type="text"/>
                </div>
                <div className={styles.wrap}>
                    <span>Last Name</span>
                    <input type="text"/>
                </div>
            </div>
            <div className={styles.Form__block2}>
                <span>Email</span>
                <input type="text"/>
            </div>
            <div className={styles.Form__block3}>
                <span>Anything you'd like to add?</span>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>

            <Button 
                text='Click here to apply for new home'
                style={{height:'70px', width:'100%'}}
                theme2
            />

        </div>
    );
};

export default Form;
