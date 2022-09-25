import React, { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import Button from 'react-bootstrap/Button';

export default function AuthPage({ setUser, handleSignUpOrLogin }) {
  const [showSignUp, setShowSignUp]  = useState(false);
  return (
    <div className="auth">
      <h1>Authorization Page</h1>
      <Button variant="info" className="btn-lg" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</Button>
      { showSignUp ?
        <SignUpForm setUser={setUser} handleSignUpOrLogin={handleSignUpOrLogin} />
        :
        <LoginForm setUser={setUser} handleSignUpOrLogin={handleSignUpOrLogin} />
      }
    </div>
  );
}
