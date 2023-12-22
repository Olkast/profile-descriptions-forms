import React, {FC, InputHTMLAttributes} from "react";
import styles from './Textarea.module.scss'

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement>{
    label: string;
    placeholder: string;
    name: string;
}

export const Textarea:FC<TextareaProps> = ({label, placeholder, name, ...rest}) => {
    return <div className={styles.form}>
        <label className={styles.formLabel} htmlFor={name}>{label}</label>
        <textarea
            placeholder={placeholder}
            name={name}
            className={styles.formTextarea}
            {...rest}
        />
    </div>
}

