import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import CreateBusinessPage from './components/CreateBusinessPage';
import SingleBusinessPage from './components/SingleBusinessPage';
import { getAllBusinessesThunk } from './store/business';
import SplashPage from './components/SplashPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getAllBusinessesThunk());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/businesses/create'>
          <CreateBusinessPage/>
        </ProtectedRoute>
        <Route path='/business/:id'>
          <SingleBusinessPage/>
        </Route>
        <Route path='/' exact={true} >
          <SplashPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
