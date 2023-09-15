import { Button, Grid } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Router from 'next/router';
import EastIcon from '@mui/icons-material/East';

import dynamic from 'next/dynamic';

const DateComponent = dynamic(() => import('./DateComponent'));
function Name({ setActiveSteps, userData }) {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <ArrowBackIcon onClick={() => setActiveSteps(1)} />
      </Grid>
      <Grid item xs={12} md={12}>
        <h2>
          Perfect {userData.name} ! Please go ahead with your Date of Birth
        </h2>
      </Grid>
      <Grid item xs={12} md={12}>
        <DateComponent />
      </Grid>
      <Grid item xs={12} md={12}>
        <div
          onClick={() => setActiveSteps(3)}
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
