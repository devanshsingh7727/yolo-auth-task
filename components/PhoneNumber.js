import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EastIcon from '@mui/icons-material/East';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { auth } from '../lib/firebase.config';
function PhoneNumber({ setSelectedPage, phoneNumber, setPhoneNumber }) {
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const phoneNumberPattern = /^\d{12}$/;

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
          callback: (response) => {
            onSignup();
          },
          'expired-callback': () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = '+' + phoneNumber;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setSelectedPage(1);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }
  return (
    <Grid container>
      <div id='recaptcha-container'></div>

      <Grid item xs={12} md={12}>
        <ArrowBackIcon />
      </Grid>
      <Grid item sx={{ padding: '10px 20px' }} xs={12} md={12}>
        <span style={{ margin: 'auto' }}>
          <h2>May I have your phone number?</h2>
          <p>Phone number is require to login.</p>
          <PhoneInput
            country={'in'}
            value={phoneNumber}
            onChange={(phone) => {
              setPhoneNumber(phone);
              setIsValid(phoneNumberPattern.test(phone));
            }}
          />
          <p>
            <small>
              {' '}
              Please verify your phone number and review our{' '}
              <span
                style={{
                  color: 'crimson',
                  textDecoration: 'underline',
                }}
              >
                privacy policy
              </span>
              .
            </small>
          </p>
        </span>
        {loading ? (
          <CircularProgress />
        ) : (
          <Button
            sx={{
              borderRadius: '18px',
              float: 'right',
              backgroundColor: 'black',
            }}
            variant='contained'
            disabled={!isValid}
            onClick={onSignup}
          >
            Get Otp <EastIcon />
          </Button>
        )}
      </Grid>
    </Grid>
  );
}

export default PhoneNumber;
