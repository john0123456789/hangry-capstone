import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = ({setShowModal}) => {

  let errorsObj = {content: ''};
  const [reactErrors, setReactErrors] = useState(errorsObj)

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();

    let error = false;
    errorsObj = {...errorsObj};
    if(email === '') {
      errorsObj.email = "Email field cannot be empty.";
      error = true;
    } else if(!email.includes("@") && !email.includes(".")) {
      errorsObj.email = "Please input a valid email address."
      error = true;
    }
    if(password === '') {
      errorsObj.password = "Password field cannot be empty.";
      error = true;
    }

    setReactErrors(errorsObj);

    if(!error) {
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };
}
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
    setShowModal(false)
    return <Redirect to='/' />;
  }

  return (
    <form className="loginform" onSubmit={onLogin}>
      <h1 className="loginformtitle">Log in to Hangry</h1>
      <h3 className="loginrequire">* field required</h3>
      <div className="loginerrors1">
        {Object.values(reactErrors).map((error, idx) => <ul key={idx}>{error}</ul>)}
      </div>
      <div className="loginerrors">
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
      <label className="loginrequire">*</label>
      <label className="login-labels">Email</label>
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
      <label className="loginrequire">*</label>
      <label className="login-labels">Password</label>
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
