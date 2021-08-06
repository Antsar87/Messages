import React from 'react';
import { auth } from './Firebase/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import SignOut from './components/SignOut/SignOut';
import Chat from './components/Chat/Chat';

function App() {
  const [autentificacion] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        {autentificacion ? <SignOut /> : null}
        {autentificacion ? <Chat /> : <SignIn />}
      </header>
    </div>
  );
}

export default App;
