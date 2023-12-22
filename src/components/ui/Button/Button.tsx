import {FC, PropsWithChildren, ReactElement} from "react";
import styles from './Button.module.scss'
import {ButtonColor} from "./const";
import classNames from "classnames";

interface ButtonProps {
    color?: ButtonColor;
}

export const Button:FC<PropsWithChildren<ButtonProps>> = ({children, color = ButtonColor.Transparent}) => {
    return (
        <button
            className={classNames(styles.button, styles[color])}
            type="submit">{children}
        </button>
    )
}

