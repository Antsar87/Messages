import React from 'react';
import { auth } from '../../Firebase/Firebase';
import './out.scss';

function SignOut() {
  return (
    <button
    className= "btn"
      style={{
        display: 'block',
        width: '30rem',
        height: '3rem',
        cursor: 'pointer',
        textTransform: "capitalize"
      }}
      onClick={() => auth.signOut()}
    >
      Sign out
    </button>
  );
}

export default SignOut;
