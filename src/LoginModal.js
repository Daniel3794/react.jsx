import React, { useState } from 'react';
import { TextField, Button, Avatar } from '@mui/material';
import Swal from 'sweetalert2';
import './LoginModal.css';

function LoginModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    // Example: sending login request to server

    // Simulating login success with a delay of 1 second
    setTimeout(() => {
      Swal.fire('Login Successful!', `Welcome back, ${email}!`, 'success');
      onClose();
    }, 1000);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <Avatar alt="Avatar" src="/path/to/avatar.jpg" className="avatar" />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default LoginModal;