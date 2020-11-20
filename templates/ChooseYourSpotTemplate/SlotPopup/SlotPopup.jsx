import Popup from '../../../components/UI/Popup/Popup';
import styles from './SlotPopup.module.scss';
import Button from '../../../components/UI/Button/Button';
import homeImg from '../../../assets/img/icons/home-page.svg';
import Router from 'next/router';
import slots from '../../../db/slots';
import plans from '../../../db/plans';
import { setLot } from '../../../store/actions/lotAction';
import { useDispatch } from 'react-redux';

const SlotPopup = ({ id, setSlotId }) => {

    const dispatch = useDispatch();
    const slotData = slots.find(e => e.id === id);

    const prev = plans.filter(e => slotData.plans.some(i => i === e.id)).slice(0, 3);

    console.log(prev, slotData.plans);

    const nextStep = () => {
        dispatch(setLot(slotData));
        Router.replace('/select_floorplan');
    }

    return (
        <Popup
            setSlotId={setSlotId}
        >
            <div className={styles.popup}>
                <div className={styles.popup__buttonBlock}>
                    <span className={styles.popup__lot}>Lot# {id} </span>
                    <Button
                        text='Select This Lot'
                        style={{ height: '50px' }}
                        onclick={() => nextStep()}
                    />
                </div>
                <p className={styles.popup__blockParam}>Size {slotData.size} m <sup>2</sup></p>
                <p className={styles.popup__blockParam}>{slotData.usp}</p>
                <p className={styles.popup__blockParam}>Floorplan Options Below</p>

                <div className={styles.popup__wrapItem}>
                    {
                        prev.map((data, i) => {
                            return (
                                <div  key={i} className={styles.popup__item}>
                                    <span className={styles.popup__itemNum}>{i + 1}</span>
                                    <img className={styles.popup__itemImg} src={data.img} alt="homeImg" />
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </Popup>
    );
};

export default SlotPopup;