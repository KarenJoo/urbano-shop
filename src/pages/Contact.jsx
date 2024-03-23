import React, { useState } from 'react';
import buttonStyles from '../components/Buttons.module.css';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function onFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function onLastNameChange(event) {
    setLastName(event.target.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();

    console.log('Form submitted with:', { firstName, lastName });

    // You can add your form submission logic here
  }

  return (
    <div className='parentContainer'>
      <div className='childContainer'>
        <form onSubmit={onFormSubmit}>
          <h1>Contact form</h1>
          <label htmlFor='first-name'>First name</label>
          <input
            id='first-name'
            name='first-name'
            value={firstName}
            placeholder='Your first name'
            onChange={onFirstNameChange}
          />
          <label htmlFor='last-name'>Last name</label>
          <input
            id='last-name'
            name='last-name'
            value={lastName}
            placeholder='Your last name'
            onChange={onLastNameChange}
          />
          <button type='submit' className={buttonStyles.primaryButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
