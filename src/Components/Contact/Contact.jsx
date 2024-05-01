import css from './Contact.module.css'

export default function Contact({ userName, userNumber, id, deleteC }) {
    
    function deleteHandler() {
        deleteC(id)
    }

    return (
        <div className={css.container}>
            <ul>
                <li>{userName}</li>
                <li>{userNumber}</li>
            </ul>
            <button className={css.btn} onClick={deleteHandler}>Delete</button>
        </div>
    )
}