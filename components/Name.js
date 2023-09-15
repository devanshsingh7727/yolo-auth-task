import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Router from 'next/router';
import EastIcon from '@mui/icons-material/East';

function Name({ setActiveSteps, onChangeHandler, userData }) {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <ArrowBackIcon onClick={() => Router.push('/')} />
      </Grid>
      <Grid item xs={12} md={12}>
        <h2>Perfect,May i know your name?</h2>
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          fullWidth
          value={userData?.name}
          id='time'
          label='Name'
          type='text'
          name='name'
          variant='standard'
          onChange={onChangeHandler}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <div
          onClick={() => userData?.name && setActiveSteps(1)}
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
