import { Grid } from '@mui/material';
import React from 'react';

function HOC({ children }) {
  return (
    <Grid
      container
      sx={{
        backgroundColor: 'offwhite',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
      }}
    >
      <Grid
        Item
        md={4}
        sm={6}
        xs={12}
        sx={{
          border: '2px solid black',
          borderRadius: '10px',
          padding: '20px',
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
}

export default HOC;
