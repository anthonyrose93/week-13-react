import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import LoginForm from './components/login-form';

function App() {
  return (
    <div className="App">
      <Navigation />
      <LoginForm />
    </div>
  );
}

export default App;