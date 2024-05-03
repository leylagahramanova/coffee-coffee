import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Touch() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4t2ddtt', 'template_c6c5m0m', form.current, {
        publicKey: 'cGZORiRq9dQog-bA6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessageSent(true); // Set messageSent to true on successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className='contact'>
      <h3>GET IN TOUCH</h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className='labels'>
          <div className='label'>
            <p>Full Name*</p>

            <input className='input' name='user_name' type='text' />
          </div>
          <div className='label'>
            <p>Email*</p>
            <input className='input' name='user_email' type='email' />
          </div>
        </div>
        <div className='textarea'>
          <textarea name='message' />
        </div>

        <button type='submit'>Submit</button>
        <div clasName="messagel" style={{backgroundColor:'#9fdf9f', padding:'1.5rem', opacity:'0.8',borderRadius:'5px',}}>  
        <div style={{opacity:'0.9'}} >
        {messageSent && <h2 style={{opacity:'0.9',fontStyle: 'italic', color:'#fff', textAlign:'center'}}>🎉Message sent</h2>}
    </div> 
     </div>
      </form>
    </div>
  );
}

export default Touch;
