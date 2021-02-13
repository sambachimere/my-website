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
  const [success, setSuccess] = useState(false);

  React.useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);

  return (
    <div className="Contact" id="contact">
      <h1 className="Contact-block-title">Contact</h1>
      {success && (
        <p style={{ color: "green" }}>Thanks for your message! </p>
      )}
      <form
        className="Contact-form" 
        name="contact" 
        method="POST"
        action="/contact/?success=true"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <InputTextField
          style={{ width: '100%' }}
          label="Your Name"
          variant="outlined"
          id="custom-css-outlined-input"
          name="name"
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
            required
          />
          <InputTextField
            className="Contact-telephone"
            fullWidth
            label="Your Phone"
            variant="outlined"
            id="custom-css-outlined-input"
            name="phone"
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
