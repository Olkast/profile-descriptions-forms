import styles from "./Modal.module.scss";
import {Button, ButtonColor} from "../Button";
import {ReactComponent as Close} from '../../../images/close.svg';
import {FC, PropsWithChildren, ReactElement} from "react";
import classNames from "classnames";
import {ButtonDisplay, ButtonPlace, LocationHeader} from "./const";


interface ModalProps {
    title: string;
    img: ReactElement;
    buttonPlace?: ButtonPlace;
    buttonDisplay?: ButtonDisplay;
    locationHeader?: LocationHeader;
}

export const Modal:FC<PropsWithChildren<ModalProps>> = ({title, img, buttonPlace = ButtonPlace.TheEnd, buttonDisplay = ButtonDisplay.Present, locationHeader = LocationHeader.Edges}) => {
    return <div className={styles.modalContainer}>
        <div className={classNames(styles.modalHeader, styles[locationHeader])}>
            <p className={styles.modalTitle}>{title}</p>
            <div className={classNames(styles.modalButton, styles[buttonDisplay])}>
                <Close />
            </div>
        </div>
        <div className={styles.modalImg}>
            {img}
        </div>
        <div className={classNames(styles.modalClose, styles[buttonPlace])}>
            <Button color={ButtonColor.Blue}>Закрыть</Button>
        </div>
    </div>
}
