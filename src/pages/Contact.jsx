import React, { useState } from 'react'
import buttonStyles from '../components/Buttons.module.css'
import styles from './Contact.module.css'
import { useForm } from 'react-hook-form'

export default function Contact() {
  const { register, handleSubmit } = useForm()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')

  function onFirstNameChange(event) {
    setFirstName(event.target.value)
  }

  function onLastNameChange(event) {
    setLastName(event.target.value)
  }

  function onEmailChange(event) {
    setEmail(event.target.value)
  }

  function onSubjectChange(event) {
    setSubject(event.target.value)
  }

  function onBodyChange(event) {
    setBody(event.target.value)
  }

  function onFormSubmit(event) {
    event.preventDefault()

    console.log('Form submitted with:', {
      firstName,
      lastName,
      email,
      subject,
      body,
    })
  }

  return (
    <div className='parentContainer'>
      <div className='childContainer'>
        <form className={styles} onSubmit={onFormSubmit}>
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

          <label htmlFor='email'>Email</label>

          <input
            id='email'
            name='email'
            value={email}
            placeholder='Email'
            onChange={onEmailChange}
          />

          <label htmlFor='subject'>Subject</label>
          <input
            id='subject'
            name='subject'
            value={subject}
            placeholder='Subject'
            onChange={onSubjectChange}
          />

          <label htmlFor='body'>Message</label>

          <input
            id='body'
            name='body'
            value={body}
            placeholder='Write here..'
            onChange={onBodyChange}
          />
          <button type='submit' className={buttonStyles.primaryButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
