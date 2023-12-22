import {ChangeEventHandler, FC, InputHTMLAttributes, Ref} from "react";
import styles from './Input.module.scss'
import {useField} from "formik";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    placeholder: string;
    name: string;
}

export const Input:FC<InputProps> = ({label, placeholder, name, onChange, ...rest}) => {
    const [field, meta, helpers] = useField(name);

    const {error, touched} = meta;

    const handleChange: ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        field.onChange(event);
    };

    return <div className={styles.form}>
        <label className={styles.formLabel} htmlFor={name}>{label}</label>
        <input
            onChange={handleChange}
            placeholder={placeholder}
            name={name}
            value={field.value || ''}
            className={styles.formInput}
            {...rest}
        />
        <div>{touched && error}</div>
    </div>
}

