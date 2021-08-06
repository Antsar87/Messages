import React, { useEffect, useState, useRef } from 'react';
import { firestore } from '../../Firebase/Firebase';
import Buble from '../Buble/Buble';
import Input from '../Input/Input';

function Chat() {
  const [msg, setmsg] = useState([{}]);

  const ale = async () => {
    firestore
      .collection('messages')
      .orderBy('createdAt')
      .onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setmsg(docs);
      });
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    ale();
  }, []);

  useEffect(scrollToBottom, [msg]);

  return (
    <>
      <div
        style={{
          height: '30rem',
          width: '30rem',
          overflowY: 'scroll',
        }}
        className="scrol"
      >
        {msg.map(({ ...things }) => (
          <Buble {...things} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <Input />
    </>
  );
}

export default Chat;
