import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [state, setState] = useState({name: '', number: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({state});
    setState({name: '', number: ''});
    
  };

  const handleChange = e => {
  setState ((prevState) => ({...prevState, [e.target.name]: e.target.value}));
  };
  console.log(state);

  return (
    <form onSubmit={handleSubmit}>
      <h2>NAME</h2>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name"
        required
      />
      <h2>NUMBER</h2>
      <input
        type="tel"
        name="number"
        value={number}
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
