import React, { useState } from 'react';
import { TextField, Button, Avatar } from '@mui/material';
import Swal from 'sweetalert2';
import './RegisterModal.css';

function RegisterModal({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleRegister = () => {
    // Perform registration logic here
    // Example: sending registration request to server

    // Simulating registration success with a delay of 1 second
    setTimeout(() => {
      Swal.fire('Registration Successful!', `Welcome, ${name}!`, 'success');
      onClose();
    }, 1000);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <Avatar alt="Avatar" src={selectedImage} className="avatar" />
        <input type="file" accept="image/*" onChange={handleImageChange} className="input" />
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
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
        <Button variant="contained" color="primary" onClick={handleRegister}>
          Register
        </Button>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default RegisterModal;