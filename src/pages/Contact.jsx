import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import buttonStyles from '../components/Buttons.module.css'
import styles from './Contact.module.css'

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  let firstName, lastName, email, subject, body

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .min(3, 'First name must be at least 3 characters')
      .max(10, 'First name cannot exceed 10 characters')
      .required('First name is required'),
    lastName: yup
      .string()
      .min(3, 'Last name must be at least 3 characters')
      .max(10, 'Last name cannot exceed 10 characters')
      .required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    subject: yup
      .string()
      .min(3, 'Subject must be at least 3 characters')
      .max(10, 'Subject cannot exceed 10 characters')
      .required('Subject is required'),
    body: yup
      .string()
      .min(10, 'Message must be at least 10 characters')
      .max(200, 'Message cannot exceed 200 characters')
      .required('Message is required'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  function onFormSubmit(data, event) {
    event.preventDefault()

    console.log('Form submitted with:', data)
    console.log('Form submitted with:', {
      firstName,
      lastName,
      email,
      subject,
      body,
    })
    setFormSubmitted(true)
  }

  function handleFormSubmit(event) {
    handleSubmit(onFormSubmit)(event)
  }

  return (
    <div className='parentContainer'>
      <div className='childContainer'>
        <form onSubmit={handleFormSubmit}>
          {' '}
          <h1>Contact form</h1>
          <div className={styles.headForm}>
            <div className={styles.nameContainer}>
              <label htmlFor='first-name'>First name*</label>
              <input
                id='first-name'
                name='first-name'
                value={firstName}
                placeholder='First name'
                {...register('firstName', {
                  required: true,
                  minLength: 3,
                  maxLength: 10,
                })}
              />
              {errors.firstName && (
                <p className={styles.error}>{errors.firstName.message}</p>
              )}
            </div>
            <div className={styles.nameContainer}>
              <label htmlFor='last-name'>Last name*</label>
              <input
                id='last-name'
                name='last-name'
                value={lastName}
                placeholder='Last name'
                {...register('lastName', {
                  required: true,
                  minLength: 3,
                  maxLength: 10,
                })}
              />
              {errors.lastName && (
                <p className={styles.error}>{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <label htmlFor='email'>Email*</label>
          <input
            id='email'
            name='email'
            value={email}
            placeholder='Email'
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
          <label htmlFor='subject'>Subject*</label>
          <input
            id='subject'
            name='subject'
            value={subject}
            placeholder='Subject'
            {...register('subject', {
              required: true,
              minLength: 3,
              maxLength: 10,
            })}
          />
          {errors.subject && (
            <p className={styles.error}>{errors.subject.message}</p>
          )}
          <label htmlFor='body'>Message*</label>
          <textarea
            id='body'
            name='body'
            value={body}
            placeholder='Write here..'
            {...register('body', { required: true, min: 10, max: 200 })}
          />
          {errors.body && <p className={styles.error}>{errors.body.message}</p>}
          {formSubmitted && (
            <h5 className={styles.formSuccess}>
              Thank you for contacting us! We will contact you by email as fast as we can.
            </h5>
          )}
          <button type='submit' className={buttonStyles.primaryButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
