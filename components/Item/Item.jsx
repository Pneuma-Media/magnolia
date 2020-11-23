import React from 'react';
import styles from './Item.module.scss';
import { useDispatch } from 'react-redux';
import Button from '../UI/Button/Button';
import Router from 'next/router';
import { setPlan } from '../../store/actions/lotAction';
import badroomsImg from '../../assets/img/icons/badrooms.svg';
import bathImg from '../../assets/img/icons/bath.svg';
import PlanImg from '../../assets/img/icons/blueprint.svg';
import cx from 'classnames';

const Item = ({ noButton, data }) => {

    const dispatch = useDispatch();

    const selectPlan = () => {
        dispatch(setPlan(data));
        Router.replace('/detailed_floorplan')
    }

    console.log(data);

    return (

        <div className={styles.Item}>

            {
                data && (
                    <>

                        <span className={styles.Item__price}>${data.price}</span>

                        <div className={styles.Item__wrapImg}>
                            <img src={data.img} alt="img" />
                        </div>

                        <div className={styles.Item__wrapData}>
                            <p className={styles.Item__title}>{data.title}</p>

                            <div className={cx(styles.Item__params ,{[styles.Item__noButton]:noButton})}>

                                <div className={styles.Item__paramsLabel}>
                                    <img src={badroomsImg} alt="badroomsImg" />
                                    <span>{data.bedrooms}</span>
                                    <span className={styles.Item__LabeName}>Bedrooms</span>
                                </div>

                                <div className={styles.Item__paramsLabel}>
                                    <img src={bathImg} alt="bathImg" />
                                    <span>{data.bathrooms}</span>
                                    <span className={styles.Item__LabeName}>Bathrooms</span>
                                </div>

                                <div className={styles.Item__paramsLabel}>
                                    <img src={PlanImg} alt="badroomsImg" />
                                    <span>{data.s}</span>
                                    <span className={styles.Item__LabeName}>Bedrooms</span>
                                </div>

                            </div>


                            {
                                !noButton && (
                                    <Button
                                        text='Select This Lot'
                                        style={{ width: '100%', height: '50px' }}
                                        onclick={() => selectPlan()}
                                    />
                                )
                            }
                        </div>

                    </>
                )
            }



        </div>

    );
};

export default Item;