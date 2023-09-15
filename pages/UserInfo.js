import Router from 'next/router';
import HOC from '../components/HOC';
import React, { useEffect, useState } from 'react';
import Name from '../components/Name';
import Email from '../components/Email';
import DOB from '../components/DOB';
import Referal from '../components/Referal';
import axios from 'axios';

function UserInfo() {
  const [activeSteps, setActiveSteps] = useState(0);
  const [userData, setuserData] = useState({});
  useEffect(() => {
    if (!Router.query.id) {
      Router.push('/');
    }
  }, []);
  const onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setuserData((prevState) => ({ ...prevState, [name]: value }));
  };
  const UpdateUserInfo = async () => {
    const data = await axios.patch('/api/user', {
      userData,
      _id: Router.query.id,
    });
    if (data.status === 200) {
      localStorage.setItem(
        'user',
        JSON.stringify({ ...userData, _id: Router.query.id })
      );
      Router.push('/Home');
    }
  };
  return (
    <HOC>
      {activeSteps === 0 ? (
        <Name
          onChangeHandler={onChangeHandler}
          setActiveSteps={setActiveSteps}
          userData={userData}
        />
      ) : activeSteps === 1 ? (
        <Email
          onChangeHandler={onChangeHandler}
          setActiveSteps={setActiveSteps}
          userData={userData}
        />
      ) : activeSteps === 2 ? (
        <DOB
          onChangeHandler={onChangeHandler}
          setActiveSteps={setActiveSteps}
          userData={userData}
        />
      ) : (
        <Referal
          onChangeHandler={onChangeHandler}
          setActiveSteps={setActiveSteps}
          userData={userData}
          UpdateUserInfo={UpdateUserInfo}
        />
      )}
    </HOC>
  );
}

export default UserInfo;
