import React, { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { Button } from '@mui/material';

function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const handleLoginModalOpen = () => {
    setLoginModalOpen(true);
  };

  const handleLoginModalClose = () => {
    setLoginModalOpen(false);
  };

  const handleRegisterModalOpen = () => {
    setRegisterModalOpen(true);
  };

  const handleRegisterModalClose = () => {
    setRegisterModalOpen(false);
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      <Button variant="contained" color="primary" onClick={handleLoginModalOpen}>
        Login
      </Button>
      <Button variant="contained" color="secondary" onClick={handleRegisterModalOpen}>
        Register
      </Button>

      {loginModalOpen && <LoginModal onClose={handleLoginModalClose} />}
      {registerModalOpen && <RegisterModal onClose={handleRegisterModalClose} />}
    </div>
  );
}

export default App;