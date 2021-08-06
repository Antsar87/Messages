import React, { useState } from 'react';
import { auth, firestore } from '../../Firebase/Firebase';
import './input.scss';

function Input() {
  const [send, setSend] = useState('');

  const enviar = async (e) => {
    e.preventDefault();
    if (send.trim() === '') return;

    const { photoURL, uid, displayName } = auth.currentUser;

    console.log(photoURL);
    await firestore.collection('messages').add({
      photoURL,
      uid,
      displayName,
      text: send,
      createdAt: new Date(),
    });
    setSend("")
  };

  const text = (e) => {
    setSend(e.target.value);
  };

  return (
    <form onSubmit={enviar} style={{ width: '30rem', display: 'flex' }}>
      <input value={send} onChange={text} className="input" />
      <button className="btn">Enviar</button>
    </form>
  );
}

export default Input;
