import {FC, useState} from "react";
import styles from './Select.module.scss'
import {ReactComponent as Check} from '../../../images/check.svg';
import classNames from "classnames";

export const Select: FC = (props) => {
        const [isShown, setIsShown] = useState(false)

        const toggleFieldset = () => {
            setIsShown(!isShown)
        }

    return (
        <div className={styles.dropdownContainer}>
            <p className={styles.title} >Пол</p>
            <div onClick={toggleFieldset} className={styles.dropdown}>
                <div className={styles.text}>Не выбрано</div>
                <Check className={classNames(styles.check, isShown && styles.open)}/>
            </div>
            {isShown &&
                        <div className={styles.listContainer}>
                            <p className={styles.selectMen}>мужской</p>
                            <p className={styles.selectWoman}>женский</p>
                        </div>
                    }

        </div>
        // <div>
        //     <div className={styles.InputContainer}>
        //         <label className={styles.formLabel} htmlFor='gender'>Пол</label>
        //         <input
        //             placeholder={'Не выбрано'}
        //             name={'gender'}
        //             className={styles.formInput}
        //         />
        //     </div>
        //     <Check className={styles.check} onClick={toggleFieldset}/>
        //     {isShown &&
        //         <div className={styles.selectContainer}>
        //             <p className={styles.selectMen}>мужской</p>
        //             <p className={styles.selectWoman}>женский</p>
        //         </div>
        //     }
        // </div>
    )
}
;

