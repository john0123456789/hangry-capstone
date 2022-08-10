import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const demoUser = async(e) => {
    e.preventDefault();
    const DemoEmail = "demo@aa.io"
    const DemoPassword ="password"
    await dispatch(login(DemoEmail, DemoPassword));
  }

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form className="loginform" onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <input
          name='email'
          type='text'
          className="firstinput"
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <input
          name='password'
          type='password'
          className="secondinput"
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <button type='submit' className="loginbutton">Login</button>
        <button type="submit" className="loginbutton" onClick={demoUser}>Demo User</button>
      </div>
    </form>
  );
};

export default LoginForm;
