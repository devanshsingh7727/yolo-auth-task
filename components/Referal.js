import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Grid, TextField } from '@mui/material';

function Name({ setActiveSteps, userData, onChangeHandler, UpdateUserInfo }) {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <ArrowBackIcon onClick={() => setActiveSteps(2)} />
      </Grid>
      <Grid item xs={12} md={12}>
        <h2>Good {userData.name} ! Please go Enter Your referal Code</h2>
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          variant='standard'
          fullWidth
          value={userData?.refer}
          label='Refer code'
          type='text'
          name='refer'
          onChange={onChangeHandler}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <Button
          variant='contained'
          disabled={!userData?.refer}
          sx={{ marginTop: '40px', backgroundColor: 'black' }}
          onClick={userData?.refer && UpdateUserInfo}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

export default Name;
