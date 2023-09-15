import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Router from 'next/router';
import EastIcon from '@mui/icons-material/East';

function Name({ setActiveSteps, userData, onChangeHandler }) {
  const [isValidEmail, setIsValidEmail] = useState(true);

  const onValidator = (e) => {
    const inputEmail = e.target.value;

    // Regular expression pattern for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Check if the input matches the email pattern
    const isValid = emailPattern.test(inputEmail);

    setIsValidEmail(isValid);
  };

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <ArrowBackIcon onClick={() => setActiveSteps(0)} />
      </Grid>
      <Grid item xs={12} md={12}>
        <h2>Hi {userData.name} ! Please tell me your email</h2>
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          id='email'
          label='Email'
          type='text'
          name='email'
          variant='standard'
          fullWidth
          value={userData?.email}
          onChange={(e) => {
            onChangeHandler(e);
            onValidator(e);
          }}
          error={!isValidEmail}
          helperText={!isValidEmail ? 'Invalid email format' : ''}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <div
          onClick={() => userData?.email && isValidEmail && setActiveSteps(2)}
          style={{
            marginTop: '40px',
            float: 'right',
            backgroundColor: 'black',
            display: 'inline-block',
            color: 'white',
            borderRadius: '50%',
            padding: '5px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <EastIcon />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Name;
