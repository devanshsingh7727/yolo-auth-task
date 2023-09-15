import axios from 'axios';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import HOC from './HOC';
import Otp from './Otp';
import PhoneNumber from './PhoneNumber';
function Main() {
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

export default Main;
