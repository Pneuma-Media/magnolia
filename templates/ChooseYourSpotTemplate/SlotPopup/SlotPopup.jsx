import Popup from '../../../components/UI/Popup/Popup';
import styles from './SlotPopup.module.scss';
import Button from '../../../components/UI/Button/Button';
import homeImg from '../../../assets/img/icons/home-page.svg';
import Router from 'next/router';
import slots from '../../../db/slots';
import plans from '../../../db/plans';
import { setLot } from '../../../store/actions/lotAction';
import { floorplanAction } from '../../../store/actions/floorplan';
import { useDispatch } from 'react-redux';
import closeImg from '../../../assets/img/icons/close.svg';
import { format } from 'number-currency-format';


const SlotPopup = ({ id, setSlotId }) => {

    const dispatch = useDispatch();
    const slotData = slots.find(e => e.id === id);


    const prev = plans.filter(e => e.type === slotData.type);
    const price = prev.map(data => data.price);


    price.sort(function (a, b) {
        return a - b;
    })

    const nextStep = () => {
        dispatch(setLot(slotData));
        dispatch(floorplanAction({ width: slotData.width, length: slotData.length }));
        Router.replace('/select_floorplan');
    }

    let priceFrom = format(price[0], {
        spacing: true,
        showDecimals: 'NEVER',
    });
    let priceTo = format(price[price.length - 1], {
        spacing: true,
        showDecimals: 'NEVER',
    });

    return (
        <Popup
            setSlotId={setSlotId}
        >
            <div className={styles.popup}>

                <div className={styles.popup__lotBlock}>
                    <span className={styles.popup__lot}>Lot# {id} </span>
                    <img className={styles.popup__close} onClick={() => setSlotId(null)} src={closeImg} alt="closeImg" />
                </div>

                <p className={styles.popup__title}>{slotData.title}</p>

                <div className={styles.popup__Params}>
                    <p className={styles.popup__blockParam}><span>Lot area:</span> {slotData.length * slotData.width} feet <sup>2</sup></p>
                    <p className={styles.popup__blockParam}><span>Lot width:</span> {slotData.width} feet</p>
                    <p className={styles.popup__blockParam}><span>Lot length:</span> {slotData.length} feet</p>
                    {/* <p className={styles.popup__blockParam}><span>Floorplans available:</span> {prev.length} </p> */}
                    <p className={styles.popup__blockParam}><span>Home price range:</span> ${priceFrom} - ${priceTo}</p>
                </div>


                <div className={styles.popup__wrapItem}>
                    <p>Floorplans:</p>
                    <div className={styles.popup__items}>
                        {
                            prev.slice(0, 3).map((data, i) => {
                                return (
                                    <img key={i} className={styles.popup__itemImg} src={data.img} alt="homeImg" />
                                )
                            })
                        }
                    </div>
                </div>

                {
                    prev.length > 3 && (
                        <p className={styles.popup__itemsLength}>
                            and { prev.length - 3} more
                        </p>
                    )
                }


                <Button
                    text='Select This Lot'
                    style={{ height: '50px', width: '100%' }}
                    onclick={() => nextStep()}
                />
            </div>
        </Popup>
    );
};

export default SlotPopup;