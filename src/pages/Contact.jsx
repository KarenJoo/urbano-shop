import React, { useState } from 'react'
import buttonStyles from '../components/Buttons.module.css'
import styles from './Contact.module.css'
import { useForm } from 'react-hook-form'

export default function Contact() {
  const { register, handleSubmit } = useForm();
  let firstName, lastName, email, subject, body;

  function onFormSubmit(data) {
    data.preventDefault()

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
        <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
          <h1>Contact form</h1>
          <label htmlFor='first-name'>First name</label>
          <input
            id='first-name'
            name='first-name'
            value={firstName}
            placeholder='Your first name'
            {...register('firstName', { required: true })}          />
          <label htmlFor='last-name'>Last name</label>
          <input
            id='last-name'
            name='last-name'
            value={lastName}
            placeholder='Your last name'
            {...register('lastName', { required: true })}
          />

          <label htmlFor='email'>Email</label>

          <input
            id='email'
            name='email'
            value={email}
            placeholder='Email'
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}          />

          <label htmlFor='subject'>Subject</label>
          <input
            id='subject'
            name='subject'
            value={subject}
            placeholder='Subject'
            {...register('subject', { required: true })}          />

          <label htmlFor='body'>Message</label>

          <textarea
            id='body'
            name='body'
            value={body}
            placeholder='Write here..'
            {...register('body', { required: true })}          />
          <button type='submit' className={buttonStyles.primaryButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
