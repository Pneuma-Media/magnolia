import Popup from '../../../components/UI/Popup/Popup';
import styles from './SlotPopup.module.scss';
import Button from '../../../components/UI/Button/Button';
import homeImg from '../../../assets/img/icons/home-page.svg';
import Router from 'next/router';

const SlotPopup = ({ id, setSlotId }) => {
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
                        onclick={() => Router.push('/select_floorplan')}
                    />
                </div>
                <p className={styles.popup__blockParam}>Lot Size Goes Here Lot Size Goes Here</p>
                <p className={styles.popup__blockParam}>USP's go here USP's go here USP's go here</p>
                <p className={styles.popup__blockParam}>Floorplan Options Below</p>

                <div className={styles.popup__wrapItem}>
                    <div className={styles.popup__item}>
                        <span className={styles.popup__itemNum}>1</span>
                        <img className={styles.popup__itemImg} src={homeImg} alt="homeImg" />
                    </div>
                    <div className={styles.popup__item}>
                        <span className={styles.popup__itemNum}>2</span>
                        <img className={styles.popup__itemImg} src={homeImg} alt="homeImg" />
                    </div>
                    <div className={styles.popup__item}>
                        <span className={styles.popup__itemNum}>3</span>
                        <img className={styles.popup__itemImg} src={homeImg} alt="homeImg" />
                    </div>
                </div>

            </div>
        </Popup>
    );
};

export default SlotPopup;