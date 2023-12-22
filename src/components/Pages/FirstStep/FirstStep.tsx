import {useFormik} from "formik";
import styles from "./FirstStep.module.scss";
import {ReactComponent as Step1} from '../../../images/step1.svg';
import {Button, ButtonColor} from "../../ui/Button";
import {Input} from "../../ui/Input";
import {Select} from "../../ui/Select";

const FirstStep = () => {

    const formik = useFormik({
        initialValues: {nickname: "", name: "", surname: "", floor: ""},
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return <div className={styles.firstStepContainer}>
        <div className={styles.imgStep1}><Step1 /></div>
        <div>
            <form className={styles.forms} onSubmit={formik.handleSubmit}>
                <div className={styles.formContainer}>
                    <Input label={'Никнейм'} placeholder={'Placeholder'} type={'text'} name={'nickname'} />
                </div>
                <div className={styles.formContainer}>
                    <Input label={'Имя'} placeholder={'Placeholder'} type={'text'} name={'name'}/>
                </div>
                <div className={styles.formContainer}>
                    <Input label={'Фамилия'} placeholder={'Placeholder'} type={'text'} name={'surname'} />
                </div>
                <Select />
                <div className={styles.buttonContainer}>
                    <Button color={ButtonColor.Transparent}>Назад</Button>
                    <Button color={ButtonColor.Blue}>Далее</Button>
                </div>
            </form>
        </div>
    </div>
}

export default FirstStep;