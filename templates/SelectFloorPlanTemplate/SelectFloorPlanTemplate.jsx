import React from 'react';
import styles from './SelectFloorPlanTemplate.module.scss';
import Item from '../../components/Item/Item';
import { Container, Row, Col } from 'reactstrap';


const SelectFloorPlanTemplate = ({ plansSlot }) => {
    return (
        <div className={styles.SelectFloorPlanTemplate}>
            <div className={styles.SelectFloorPlanTemplate__innerContainer}>
                <Container >
                    <Row>
                        {
                            plansSlot && plansSlot.map((data, i) => {
                                return (
                                    <Col xl='4' lg='6' md='6' sm='12' key={i}>
                                        <Item
                                            data={data}
                                        />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default SelectFloorPlanTemplate;