import React from "react";
import {useFormik} from "formik";
import styles from "./MainForm.module.scss"
import {Button, ButtonColor} from "../../../ui/Button";
import {Input} from "../../../ui/Input";


const MainForm = () => {
    const formik = useFormik({
        initialValues: {numberPhone: "", email: ""},
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={styles.forms}>
                <div className={styles.formContainer}>
                    <Input disabled label={'Номер телефона'} placeholder={'+7 999 999-99-99'} type={'tel'} name={'numberPhone'} />
                </div>
                <div className={styles.formContainer}>
                    <Input disabled label={'Email'} placeholder={'webstudio.fractal@example.com'} type={'email'} name={'email'}  />
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <Button color={ButtonColor.Blue} children={'Начать'}/>
            </div>
        </form>
    )
}

export default MainForm;