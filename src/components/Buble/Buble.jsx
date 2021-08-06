import React from 'react';
import './buble.scss';
import { auth } from '../../Firebase/Firebase';

function Buble({ text, photoURL, uid, displayName }) {
    console.log(auth.currentUser);
  return (
    <div
      className={`flex ${uid === auth.currentUser.uid ? 'send' : 'recived'}`}
    >
      {' '}
      <img
        src={`${photoURL}`}
        alt="hola"
        style={{ borderRadius: '50%', height: '3rem' }}
      />
      <div className="box">
        <p className="box_name">{displayName}</p>
        <p className="box_text">{text}</p>
      </div>
    </div>
  );
}

export default Buble;
