import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = ({setShowModal}) => {

  let errorsObj = {content: ''};
  const [reactErrors, setReactErrors] = useState(errorsObj)

  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();

    let error = false;
    errorsObj = {...errorsObj};
    if(username === '') {
      errorsObj.username = "Username field cannot be empty.";
      error = true;
    } else if (username.length < 5 || username.length > 20) {
      errorsObj.username = "Username must be longer than 5 characters and shorter than 20.";
      error = true;
    }
    if(email === '') {
      errorsObj.email = "Email field cannot be empty.";
      error = true;
    } else if (!email.includes("@") || !email.includes(".")) {
      errorsObj.email = "Please input a valid email address."
      error = true;
    }
    if(password === '') {
      errorsObj.password = "Password field cannot be empty.";
      error = true;
    } else if (password.length < 8) {
      errorsObj.password = "Password must be 8 characters or longer."
      error = true;
    }
    if(repeatPassword === '') {
      errorsObj.repeatPassword = "Confirm Password field cannot be empty.";
      error = true;
    } else if (repeatPassword !== password) {
      errorsObj.repeatPassword = "Please make sure both passwords match.";
      error = true;
    }

    setReactErrors(errorsObj);

    if(!error) {
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };
}

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    setShowModal(false)
    return <Redirect to='/' />;
  }

  return (
    <form className="signupform" onSubmit={onSignUp}>
      <h1 className="signupformtitle">Sign Up for Hangry</h1>
      <h2 className="h2title">Never go hangry again!</h2>
      <h3 className="signuprequire">* field required</h3>
      <div className="signuperrors">
        {Object.values(reactErrors).map((error, idx) => <ul key={idx}>{error}</ul>)}
      </div>
      <div className="signupbackenderrors">
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label className="signuprequire">*</label>
        <label className="signup-labels">Username</label>
        <input
          type='text'
          className="inputfirst"
          placeholder="Username"
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label className="signuprequire">*</label>
        <label className="signup-labels">Email</label>
        <input
          type='text'
          className="inputs"
          placeholder="Email"
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label className="signuprequire">*</label>
        <label className="signup-labels">Password</label>
        <input
          type='password'
          className="inputs"
          placeholder="Password"
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label className="signuprequire">*</label>
        <label className="signup-labels">Confirm Password</label>
        <input
          type='password'
          className="inputs"
          placeholder="Confirm Password"
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
        ></input>
      </div>
      <button type='submit' className="signupbutton">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
