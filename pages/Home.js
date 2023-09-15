import Router from 'next/router';
import HOC from '../components/HOC';
import React, { useEffect, useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Grid } from '@mui/material';
function Home() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('user')));
    console.log(typeof JSON.parse(localStorage.getItem('user')));
    if (!JSON.parse(localStorage.getItem('user'))) {
      Router.push('/');
    } else {
      setUserData(JSON.parse(localStorage.getItem('user')));
    }
  }, []);
  return (
    <HOC>
      <Button
        sx={{ float: 'right' }}
        onClick={() => {
          localStorage.removeItem('user');
          Router.push('/');
        }}
      >
        Logout <LogoutIcon />
      </Button>
      <Grid style={{ textAlign: 'center', margin: '60px 0px' }}>
        <h3>Welcome {userData?.name}</h3>
      </Grid>
    </HOC>
  );
}

export default Home;
