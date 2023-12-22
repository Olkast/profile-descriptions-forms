import {FC, InputHTMLAttributes, useState} from "react";
import styles from './Checkbox.module.scss'


interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>{
    text: string;
}

export  const Checkbox:FC<CheckboxProps> = ({text, ...rest}) => {

    const [checked, setChecked] = useState(false);

    return <div className={styles.checkbox}>
            <input
                checked={checked}
                className={styles.CheckboxInput}
                onChange={() => setChecked(!checked)}
                {...rest}
            />
            <p className={styles.checkboxText}>{text}</p>
        </div>
}