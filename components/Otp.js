import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EastIcon from '@mui/icons-material/East';
import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import CircularProgress from '@mui/material/CircularProgress';

function Otp({ phoneNumber, otp, setOtp, setSelectedPage, ExistingUser }) {
  const [loading, setLoading] = useState(false);
  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        ExistingUser();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <ArrowBackIcon onClick={() => setSelectedPage(0)} />
      </Grid>
      <Grid item xs={12} md={12}>
        <h2>Enter OTP to verify your phone number</h2>
        <p>
          <small style={{ opacity: '0.7' }}>
            OTP use in {phoneNumber}{' '}
            <span
              onClick={() => setSelectedPage(0)}
              style={{ color: 'crimson', cursor: 'pointer' }}
            >
              Edit
            </span>
          </small>
        </p>
      </Grid>
      <Grid item xs={12} md={12}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '40px',
        }}
      >
        <Button
          sx={{
            color: 'black',
            opacity: '0.5',
          }}
          onClick={() => setSelectedPage(0)}
        >
          {' '}
          Resend OTP
        </Button>

        {loading ? (
          <CircularProgress />
        ) : (
          <div
            onClick={onOTPVerify}
            style={{
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
        )}
      </Grid>
    </Grid>
  );
}

export default Otp;
