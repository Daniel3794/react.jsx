import React, { useState } from 'react';
import { Button, Modal, TextField, FormControl, Box } from '@mui/material';
import { Link } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderradius: '5px',
  };

const ModalExample = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle login or register
    const action = isLogin ? 'Login' : 'Register';
    console.log(`${action} - User: ${user}, - Email: ${email}, Password: ${password}`);
    // Reset the form
    setUser('');
    setEmail('');
    setPassword('');
    handleClose();
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>Get Start</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
        <div className="modal-content">
          <h1>{isLogin ? 'Login' : 'Register'}</h1>
          <form onSubmit={handleSubmit}>
          <FormControl>
          <TextField
              label="Username"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input type='file'></input>
            <Link to="/main"><Button variant="contained" type="submit">{isLogin ? 'Login' : 'Register'}</Button></Link>
            </FormControl>
          </form>
          <p onClick={toggleForm}>
            {isLogin ? 'Create an account' : 'Already have an account?'}
          </p>
        </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalExample;