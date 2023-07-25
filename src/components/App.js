import React, { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';


const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = ({name, number}) => {
    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  
    if (existingContact) {
      alert('Contact already exists!');
      return;
    }
  
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    setContacts([...contacts, newContact]);
  };
  
  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }; 

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};
App.state = {
  contacts: [],
  name: '',
  number: ''
}

export default App;
