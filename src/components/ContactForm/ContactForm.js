import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ addContact }) => {
  const [state, setState] = useState({name: '', number: ''});
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(state);
    
    setState({ name: '', number: '' });
  };

  const handleChange = e => {
  setState ((prevState) => ({...prevState, [e.target.name]: e.target.value}));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>NAME</h2>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name"
        required
      />
      <h2>NUMBER</h2>
      <input
        type="tel"
        name="number"
        value={state.number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;