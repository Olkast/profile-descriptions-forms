import {useFormik} from "formik";
import styles from "./SecondStep.module.scss";
import {ReactComponent as Step2} from '../../../images/step2.svg';
import {ReactComponent as PlusImg} from '../../../images/plus.svg';
import {Checkbox} from "../../ui/Checkbox";
import {Button, ButtonColor} from "../../ui/Button";

const SecondStep = () => {
    const formik = useFormik({
        initialValues: {advantages: ""},
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return <div className={styles.SecondStepContainer}>
        <div className={styles.imgStep2}><Step2/></div>
        <div>
            <form className={styles.forms} onSubmit={formik.handleSubmit}>
                <div className={styles.form}>
                    <label className={styles.formLabel} htmlFor="advantages">Преимущества</label>
                    <input
                        placeholder={'Placeholder'}
                        type="text"
                        name="advantages"
                        className={styles.formInput}
                    />
                    <input
                        placeholder={'Placeholder'}
                        type="text"
                        name="advantages"
                        className={styles.formInput}
                    />
                    <input
                        placeholder={'Placeholder'}
                        type="text"
                        name="advantages"
                        className={styles.formInput}
                    />
                </div>
            </form>
        </div>
        <div className={styles.plusImgContainer}>
            <PlusImg/>
        </div>
        <div className={styles.checkboxContainer}>
            <p className={styles.checkboxTitle}>Checkbox группа</p>
            <Checkbox type={"checkbox"} text={'1'}/>
            <Checkbox type={"checkbox"} text={'2'}/>
            <Checkbox type={"checkbox"} text={'3'}/>
        </div>
        <div className={styles.checkboxContainer}>
            <p className={styles.checkboxTitle}>Radio группа</p>
            <Checkbox type={"radio"} text={'1'}/>
            <Checkbox type={"radio"} text={'2'}/>
            <Checkbox type={"radio"} text={'3'}/>
        </div>
        <div className={styles.buttonContainer}>
            <Button color={ButtonColor.Transparent}>Назад</Button>
            <Button color={ButtonColor.Blue}>Далее</Button>
        </div>
    </div>
}

export default SecondStep;