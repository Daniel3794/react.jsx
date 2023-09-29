import React from "react";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Grid,
  Box,
  Modal,
  TextField,
  FormControl,
  Typography,
} from "@mui/material";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {};

export default function Header({}: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Grid container sx={{ alignItems: "center" }}>
      <Grid xs={2}>
        <Typography variant="h4" sx={{ 
          color: "white",
          position: "absolute",
          top: "2%",
          left: "0",
      }}>Logo</Typography>
      </Grid>
      <Grid
        xs={10}
        sx={{ 
        display: "flex", 
        justifyContent: "end", 
        columnGap: "1rem",
        position: "absolute",
        top: "3%",
        left: "86%",
      }}
      >
        <Button variant="outlined">Login</Button>
        <Button variant="contained" onClick={handleOpen}>Register</Button>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography variant="h5" sx={{textAlign:"center"}}>Register before enter</Typography>
        <CloseIcon
        onClick={handleClose}
        sx={{
          position: "absolute",
          top: "5%",
          left: "90%",
          cursor: "pointer",
        }}
        />
          <FormControl>
            <TextField
            required
            id="Username"
            label="Username"
            variant="standard"
            />
            <TextField
            required
            id="Password"
            label="Password"
            variant="standard"
            />
            <TextField
            required
            id="ConfirmPassword"
            label="ConfirmPassword"
            variant="standard"
            />
            <TextField required id="Email" label="Email" variant="standard" />
            <Button variant="contained" sx={{ width: "100%", margin: "1rem" }}>
              Register
            </Button>
          </FormControl>
          
        </Box>
      </Modal>
    </Grid>
  );
}
