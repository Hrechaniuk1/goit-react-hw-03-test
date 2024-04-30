import { Formik, Form, Field } from 'formik'
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik"

// import css from './ContactForm.module.css'



export default function ContactForm({addContact}) {
    const nameId = useId()
    const telId = useId()
    const itemId = Math.random()
    const ContactSchema = Yup.object().shape({
        name: Yup.string().matches(/^[a-zA-Z]+$/, 'Name must contain only English letters').min(2, '1 letter? For real?').max(15, 'Name is too long').required('Enter the name please'),
        number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, 'Incorrect number').required('Enter the number please')
    })

    function submitHandler(values, actions) {
        values.id = itemId
        addContact(values)
        actions.resetForm()

    }

    return (<Formik
            initialValues={{
                name: '',
                number: '',
            }}
        onSubmit={submitHandler}
        validationSchema={ContactSchema}
        >
            <Form>
                <label htmlFor={nameId}>Name</label>
            <Field type='text' name='name' id={nameId}></Field>
            <ErrorMessage name='name' component='span'></ErrorMessage>
                <label htmlFor={telId}>Number</label>
            <Field type='tel' name='number' id={telId} ></Field>
            <ErrorMessage name='number' component='span'></ErrorMessage>
                <button>Add contact</button>
            </Form>
        </Formik>)
}