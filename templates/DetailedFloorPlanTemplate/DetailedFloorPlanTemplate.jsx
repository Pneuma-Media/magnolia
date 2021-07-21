import React from 'react';
import styles from './DetailedFloorPlanTemplate.module.scss';
import Item from '../../components/Item/Item';
import Slider from '../../components/Slider/Slider';
import Button from '../../components/UI/Button/Button';
import Router from 'next/router';
import { Container, Row, Col } from 'reactstrap';

const DetailedFloorPlanTemplate = ({ selectorPlan }) => {


    return (
        <div className={styles.DetailedFloorPlanTemplate}>

            <Container>

                <Row>
                    {selectorPlan && (
                        <Col xl='4' lg='4'>
                            <div className={styles.wrapItem}>
                                <Item
                                    noButton
                                    data={selectorPlan}
                                />
                            </div>
                        </Col>
                    )}

                    <Col xl='8' lg='8'>

                        <div className={styles.wrapSlider}>
                            <div className={styles.slider}>

                                {selectorPlan && (
                                    <Slider
                                        images={selectorPlan.images}
                                    />
                                )}
                            </div>

                            <Button
                                text='Choose this floorplan!'
                                style={{ height: '50px' }}
                                onclick={() => Router.replace('/customize_lnterior')}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DetailedFloorPlanTemplate