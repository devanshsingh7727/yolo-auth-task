import React, { useEffect, useState } from 'react';
import HOC from '../components/HOC';
import PhoneNumber from '../components/PhoneNumber';
import Otp from '../components/Otp';
import axios from 'axios';
import { Button } from '@mui/material';
import Router from 'next/router';
function index() {
  const [Win, setWin] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [SelectedPage, setSelectedPage] = useState(0);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWin(true);
    }
  }, []);
  const RegisterUser = async () => {
    const { data } = await axios.post('/api/user', { phoneNumber });
    return data.insertedId;
  };
  const loginUser = async () => {
    const data = await axios.get(`/api/user?phoneNumber=${phoneNumber}`);
    return data;
  };
  const ExistingUser = async () => {
    const loginInfo = await loginUser();
    if (loginInfo.status === 200) {
      localStorage.setItem('user', JSON.stringify(loginInfo.data.user));
      Router.push('/Home');
    } else {
      const RegisterInfo = await RegisterUser();
      Router.push(`/UserInfo?id=${RegisterInfo}`);
    }
  };
  return (
    Win && (
      <HOC>
        {SelectedPage === 0 ? (
          <PhoneNumber
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            setSelectedPage={setSelectedPage}
          />
        ) : (
          SelectedPage === 1 && (
            <Otp
              phoneNumber={phoneNumber}
              otp={otp}
              setOtp={setOtp}
              setSelectedPage={setSelectedPage}
              ExistingUser={ExistingUser}
            />
          )
        )}
      </HOC>
    )
  );
}

export default index;
