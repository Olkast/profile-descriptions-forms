import React, {FC, InputHTMLAttributes} from "react";
import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    placeholder: string;
    type: string;
    name: string;
}

export const Input:FC<InputProps> = ({label, placeholder, name, ...rest}) => {
    return <div className={styles.form}>
        <label className={styles.formLabel} htmlFor={name}>{label}</label>
        <input
            placeholder={placeholder}
            name={name}
            className={styles.formInput}
            {...rest}
        />
    </div>
}

