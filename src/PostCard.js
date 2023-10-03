// App.js

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Post from './Post.jsx';
import NewPostModal from './NewPostCard.js';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handlePost = (content, image) => {
    const newPost = {
      id: Date.now(),
      content: content,
      image: image,
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      
      <Button  color="grey" onClick={handleOpenModal}>
        Create
      </Button>
      <NewPostModal isOpen={modalOpen} onClose={handleCloseModal} onPost={handlePost} />
      <div>
        {posts.map((post) => (
          <Post key={post.id} content={post.content} image={post.image} />
        ))}
      </div>
    </div>
  );
};

export default App;