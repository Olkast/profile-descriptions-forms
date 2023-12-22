import React from "react";
import MainForm from "./MainForm/MainForm";
import styles from "./MainPage.module.scss"
import {ReactComponent as Folder} from '../../../images/folder.svg';


const MainPage = () => {
    return <div className={styles.mainPage}>
        <div className={styles.title}>
            <div>
                <button className={styles.logo}>АИ</button>
            </div>
            <div className={styles.columnRight}>
                <h2 className={styles.name}>Алексей Иванов</h2>
                <div className={styles.links}>
                    <div className={styles.link}>
                        <Folder />
                        <p className={styles.text}>Telegram</p>
                    </div>
                    <div className={styles.link}>
                        <Folder />
                        <p className={styles.text}>GitHub</p>
                    </div>
                    <div className={styles.link}>
                        <Folder />
                        <p className={styles.text}>Резюме</p>
                    </div>
                </div>
            </div>
        </div>
        <MainForm/>
    </div>
}

export default MainPage;