import { FaUser } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import css from './Contact.module.css';

const Contact = ({ contact: { id, name, number },  onDelete }) => {
    
    return (
        <div className={css.container}>
            <div>
                <p className={css.text}><FaUser className={css.icon} />{name}</p>
                <p className={css.text}><IoIosCall className={css.icon} />{number}</p>
            </div>
           
            <button className={css.btnDelete} onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}

export default Contact;