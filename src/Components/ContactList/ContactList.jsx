// import css from './ContactList.module.css'
import Contact from '../Contact/Contact'

export default function ContactList({initial, deleteC}) {

    return (
        <ul>
            {initial.map(elem => {
               return <li key={elem.id}>
                    <Contact userName={elem.name} userNumber={elem.number} id={elem.id} deleteC={deleteC}></Contact>
                </li>
                
            })}
        </ul>
    )
}