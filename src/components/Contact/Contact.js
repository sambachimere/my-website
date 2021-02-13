import React, { useState } from 'react';
// import { Axios, db } from '../../firebase/firebaseConfig';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core/';

import './Contact.css';

const InputTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E1AE00',
      },
      '&:hover fieldset': {
        borderColor: '#E1AE00',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#E1AE00',
      },
    },
  },
})(TextField);

const SubmitButton = withStyles({
  root: {
    backgroundColor: '#E1AE00',
    fontSize: '23px',
    fontWeight: '400',
    letterSpacing: '1px',
    marginTop: '40px',
    '&:hover': {
      backgroundColor: '#E1AE00',
    },
  },
})(Button);

const Contact = () => {
  const [formData, setFormData] = useState({});
  console.log(formData);

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
    
  //   setFormData({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     message: '',
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    let frmData = new FormData(formData);
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(frmData).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
      alert(error))

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  }

  // const sendEmail = () => {
  //   Axios.post(
  //     'https://us-central1-my-website-52582.cloudfunctions.net/submit',
  //     formData
  //   )
  //     .then((res) => {
  //       db.collection('emails').add({
  //         name: formData.name,
  //         email: formData.email,
  //         phone: formData.phone,
  //         message: formData.message,
  //         time: new Date(),
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="Contact" id="contact">
      <h1 className="Contact-block-title">Contact</h1>
      {/* <form className="Contact-form" onSubmit={handleSubmit}> */} 
      <form
        className="Contact-form" 
        name="contact" 
        onSubmit={handleSubmit} 
        method="POST"
        data-netlify="true"
      >
        <InputTextField
          style={{ width: '100%' }}
          label="Your Name"
          variant="outlined"
          id="custom-css-outlined-input"
          name="name"
          onChange={updateInput}
          value={formData.name || ''}
          required
        />
        <div className="Contact-emailAndPhone">
          <InputTextField
            className="Contact-email"
            fullWidth
            label="Your Email"
            variant="outlined"
            id="custom-css-outlined-input"
            name="email"
            onChange={updateInput}
            value={formData.email || ''}
            required
          />
          <InputTextField
            className="Contact-telephone"
            fullWidth
            label="Your Phone"
            variant="outlined"
            id="custom-css-outlined-input"
            name="phone"
            onChange={updateInput}
            value={formData.phone || ''}
            required
          />
        </div>
        <InputTextField
          fullWidth
          label="Your Message"
          variant="outlined"
          id="custom-css-outlined-input"
          multiline
          rows={10}
          name="message"
          onChange={updateInput}
          value={formData.message || ''}
          required
        />
        <SubmitButton
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
        >
          Send
        </SubmitButton>
      </form>
    </div>
  );
};

export default Contact;
