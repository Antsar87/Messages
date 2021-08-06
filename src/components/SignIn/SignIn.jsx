import React from 'react';
import { signInWithGoogle } from '../../Firebase/Firebase';

function SignIn() {
  return (
    <button
      className="btn"
      style={{
        display: 'block',
        width: '30rem',
        height: '3rem',
        cursor: 'pointer',
        textTransform: 'capitalize',
      }}
      onClick={signInWithGoogle}
    >
      {' '}
      Sign in with Google{' '}
    </button>
  );
}

export default SignIn;
