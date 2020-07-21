import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core/';

import './Contact.css';

const InputTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
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

const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <h1 className="Contact-block-title">Contact</h1>
      <form className="Contact-form">
        <InputTextField
          style={{ width: '100%' }}
          label="Votre Nom & Prénom"
          variant="outlined"
          id="custom-css-outlined-input"
          //size="normal"
        />
        <div className="Contact-emailAndPhone">
          <InputTextField
            className="Contact-email"
            fullWidth
            label="Votre Email"
            variant="outlined"
            id="custom-css-outlined-input"
          />
          <InputTextField
            className="Contact-telephone"
            fullWidth
            label="Votre Téléphone"
            variant="outlined"
            id="custom-css-outlined-input"
          />
        </div>
        <InputTextField
          fullWidth
          label="Votre Message"
          variant="outlined"
          id="custom-css-outlined-input"
          multiline
          rows={10}
        />
        <Button
          variant="contained"
          color="#e1ae00"
          disableElevation
          fullWidth
          className="Contact-button"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Contact;
