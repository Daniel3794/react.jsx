
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
import { Container,Box, Card } from "@mui/material";
import Signin from "./signin.js";
import Signup from "./signup.js";
import Post from "./post.js";
import Friend from "./friend.js";
import Chat from "./chat.js";
import Create from "./create.js";
import Modal from "./components/Modal.jsx";
import PostC from "./components/PostC.jsx"
import Main from "./main.js";
import ImageUpload from "./ImageUpload.js";


function App() {
  
  return (
    <Box>
      <Container maxWidth="lg" sx={{ paddingY: "16px" }}>
      <Router>
        <Routes>
          <Route path="/" element={<ImageUpload />} />
          <Route path="signin" element={< Signin/>} />
          <Route path="signup" element={<Signup />} />
          <Route path="post" element={<Post />} />
          <Route path="friend" element={<Friend />} />
          <Route path="chat" element={<Chat />} />
          <Route path="create" element={<Create />} />
          <Route path="modal" element={<Modal />} />
          <Route path="postc" element={<PostC />} />
          <Route path="main" element={<Main />} />

        </Routes>
      </Router>
      </Container>
    </Box>
  );
}

export default App;
