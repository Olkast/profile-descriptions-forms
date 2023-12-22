import {useFormik} from "formik";
import styles from "./ThirdStep.module.scss";
import {ReactComponent as Step3} from '../../../images/step3.svg';
// import {ReactComponent as Successfully} from '../../../images/successfully.svg';
// import {ReactComponent as Cross} from '../../../images/cross.svg';
import {Button, ButtonColor} from "../../ui/Button";
import {Textarea} from "../../ui/Textarea";
// import {Modal} from "../../ui/Modal/Modal";
// import {ButtonDisplay, ButtonPlace, LocationHeader} from "../../ui/Modal/const";


const ThirdStep = () => {
    const formik = useFormik({
        initialValues: {aboutMe: ""},
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return <div className={styles.thirdStepContainer}>
        <div className={styles.imgStep3}>
            <Step3 />
        </div>
        <div>
            <form className={styles.forms} onSubmit={formik.handleSubmit}>
                <Textarea height={'84px'} placeholder={'placeholder'} name={'aboutMe'} label={'О себе'}/>
            </form>
        </div>
        <div className={styles.buttonContainer}>
            <Button color={ButtonColor.Transparent}>Назад</Button>
            <Button color={ButtonColor.Blue}>Отправить</Button>
        </div>
        {/*<Modal title={'Форма успешно отправлена'} img={<Successfully />} buttonPlace={ButtonPlace.Center} buttonDisplay={ButtonDisplay.Absent} locationHeader={LocationHeader.Center}/>*/}
        {/*<Modal title={'Ошибка'} img={<Cross />} buttonPlace={ButtonPlace.TheEnd} buttonDisplay={ButtonDisplay.Present} locationHeader={LocationHeader.Edges} />*/}
    </div>
}

export default ThirdStep;