import React from 'react';
import styles from './Popup.module.scss';


const Popup = ({children, setSlotId}) => {

    return (
        <div className={styles.popup}>
          <div onClick={() => setSlotId(null)} className={styles.popup__close}>
              <span></span>
              <span></span>
          </div>
          
                {children}
           
        </div>
    );
};

export default Popup;