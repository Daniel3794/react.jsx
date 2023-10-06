import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  Avatar,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  input: {
    display: 'none',
  },
}));

function AuthModal({ isOpen, onClose }) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const [isAvatarSelected, setIsAvatarSelected] = useState(false);

  const handleSignUp = () => {
    // Handle sign-up logic
    onClose();
  };

  const handleSignIn = () => {
    // Handle sign-in logic
    onClose();
  };

  const handleAvatarChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
        setIsAvatarSelected(true);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} aria-labelledby="auth-dialog-title">
      <DialogTitle id="auth-dialog-title">Create Account / Sign In</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          accept="image/*"
          className={classes.input}
          id="avatar-upload"
          type="file"
          onChange={handleAvatarChange}
        />
        <label htmlFor="avatar-upload">
          <IconButton color="primary" component="span">
            <PhotoCamera />
          </IconButton>
          <Typography variant="body2" color="textSecondary">
            Select Avatar
          </Typography>
        </label>
        {isAvatarSelected && (
          <Avatar className={classes.avatar} src={avatar} alt="Avatar" />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSignUp} color="primary">
          Sign Up
        </Button>
        <Button onClick={handleSignIn} color="primary">
          Sign In
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>My App</h1>
      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Open Modal
      </Button>
      <AuthModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;