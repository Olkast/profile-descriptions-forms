import {Form, Formik} from "formik";
import styles from "./MainForm.module.scss"
import {Button, ButtonColor} from "../../../ui/Button";
import {Input} from "../../../ui/Input";
import * as Yup from 'yup';


const MainForm = () => {

    const SignupSchema = Yup.object().shape({
        phone: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });

    return (
        <Formik enableReinitialize validateOnChange validationSchema={SignupSchema} initialValues={{phone: "", email: ""}} onSubmit={(values) => {
            console.log(values);
        }}>
            <Form>
                <div className={styles.forms}>
                    <div className={styles.formContainer}>
                        <Input label={'Номер телефона'} placeholder={'+7 999 999-99-99'}
                               name={'phone'}/>
                    </div>
                    <div className={styles.formContainer}>
                        <Input label={'Email'} placeholder={'webstudio.fractal@example.com'}
                               name={'email'}/>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <Button color={ButtonColor.Blue} children={'Начать'}/>
                </div>
            </Form>
        </Formik>
    )
}

export default MainForm;