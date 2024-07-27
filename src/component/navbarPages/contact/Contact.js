import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import TextSpan from '../../TextSpan'

const Contact = () => {
  const sentance = 'Contact_Me'.split('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [emailStatus, setEmailStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }

    emailjs
      .send(
        'service_cs549wa',
        'template_40rfyyz',
        templateParams,
        'EzZ5LPVa1eRdCe2u6'
      )
      .then(
        (result) => {
          console.log(result.text)
          setEmailStatus('success')
        },
        (error) => {
          console.log(error.text)
          setEmailStatus('error')
        }
      )
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <div className='contact-outter'>
      <div className='contact-form'>
        <div className='name'>
          {sentance.map((letter, index) => {
            return (
              <TextSpan key={index}>
                <span>{letter === '' ? '\u00A0' : letter}</span>
              </TextSpan>
            )
          })}
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>
              <h3>Name:</h3>
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='email'>
              <h3>Email:</h3>
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='message'>
              <h3>Message:</h3>
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type='submit'>Send</button>
        </form>
        {emailStatus === 'success' && (
          <div className='success-message'>
            <img src='success-thumbnail-url' alt='Success' />
            <p>Email sent successfully!</p>
          </div>
        )}
        {emailStatus === 'error' && (
          <div className='error-message'>
            <p>
              There was an error sending your email. Please try again later.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact
