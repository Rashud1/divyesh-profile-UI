import React, { useRef, useState } from 'react'
import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import emailjs from 'emailjs-com'

export default function Contact() {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const handleOnSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_c9op0wf',
        'template_g0wip1p',
        formRef.current,
        'ZnQmTI3jFqBCpD9-1',
      )

      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Lets discuss my project</h1>

          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" /> 0450757539
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              rashudunited10@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" /> 6 Glenavon Street,
              Toukley, NSW,2263
            </div>
          </div>
        </div>

        <div className="c-right">
          <form ref={formRef} onSubmit={handleOnSubmit}>
            <fieldset>
              <legend>Contact Me</legend>
              <label for="fullName">Your Name:</label>
              <input type="text" id="fullName" name="fullName" />
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" />
              <label for="phone">Phone:</label>
              <input type="phone" id="phone" name="phone" />
              <label for="message">Your message:</label>
              <textarea name="message" id="message" />
              <button type="submit" className="submit-button">
                SEND
              </button>
              {done && 'Thank you'}
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}
