import { useState, useEffect } from "react";
import ContactList from '../ContactList/ContactList';
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from '../ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import css from './App.module.css';


function App() {
    const [contacts, setContacts] = useState([]);


    useEffect(() => {
        const savedContacts = JSON.parse(localStorage.getItem('contacts'));
        console.log("Retrieved contacts from localStorage:", savedContacts); 
        if (savedContacts) {
            setContacts(savedContacts);
        }
    }, []);


    const addContact = (newContact) => {
        const updatedContacts = [...contacts, { ...newContact, id: nanoid() }];
        setContacts(updatedContacts);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    };

    const deleteContact = (contactId) => {

        const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
        setContacts(updatedContacts);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    };

    const [search, setSearch] = useState('');
    
    const searchContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={css.container}>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={ addContact } />
            <SearchBox
                value={search}
                onSearch={setSearch}
            />
            <ContactList
                contacts={searchContacts}
                onDelete={deleteContact}
            />
        </div>
    );
}

export default App
