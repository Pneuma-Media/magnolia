import styles from './OptionsGroup.module.scss';
import { Checkbox } from 'react-input-checkbox';


const OptionsGroup = () => {
    return (
        <div className={styles.group}>
            <div className={styles.group__name}>
                Singles
            </div>
            <div className={styles.group__options}>
                <div className={styles.option}>
                    <div className={styles.option__label}>
                        <Checkbox
                            theme={styles.checkbox}
                            size={2}
                            onChange={() => null}
                        >
                            Onyx Black
                        </Checkbox>
                    </div>
                    <div className={styles.option__price}>
                        +$0
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OptionsGroup;