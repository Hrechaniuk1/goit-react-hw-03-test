import { Formik, Form, Field } from 'formik'
import { useId } from "react";

// import css from './ContactForm.module.css'


export default function ContactForm({addContact}) {
    const nameId = useId()
    const telId = useId()
    const itemId = useId()

    function submitHandler(values, actions) {
        addContact(values)
        values.id = itemId
        actions.resetForm()

    }

    return (<Formik
            initialValues={{
                name: '',
                number: '',
            }}
            onSubmit={submitHandler}
        >
            <Form>
                <label htmlFor={nameId}>Name</label>
                <Field type='text' name='name' id={nameId} required></Field>
                <label htmlFor={telId}>Number</label>
                <Field type='tel' name='number' id={telId} required></Field>
                <button>Add contact</button>
            </Form>
        </Formik>)
}