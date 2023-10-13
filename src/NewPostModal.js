import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Modal,
  TextField,
  Typography,
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import PostCard from './NewPostForm';

const useStyles = makeStyles((theme) => ({
  modalRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPaper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  imagePreview: {
    width: '100%',
    maxHeight: 300,
    objectFit: 'cover',
    marginBottom: theme.spacing(2),
  },
  uploadButton: {
    marginLeft: theme.spacing(2),
  },
  postCard: {
    marginBottom: theme.spacing(2),
  },
}));

const NewPostModal = ({ avatarUrl }) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setPostContent('');
    setImage(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      content: postContent,
      image: image,
      avatar: avatarUrl,
    };

    setPosts((prevPosts) => [newPost, ...prevPosts]);

    handleModalClose();
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleModalOpen}>
        Create New Post
      </Button>
      <Modal open={modalOpen} onClose={handleModalClose} className={classes.modalRoot}>
        <div className={classes.modalPaper}>
          <Typography variant="h6">Create New Post</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.avatarContainer}>
              <Avatar alt="Avatar" src={avatarUrl} className={classes.avatar} />
              <TextField
                className={classes.textField}
                variant="outlined"
                label="What's on your mind?"
                multiline
                fullWidth
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              />
            </div>
            <div className={classes.imageContainer}>
              {image && <img src={image} alt="Preview" className={classes.imagePreview} />}
              <input
                accept="image/*"
                id="image-upload"
                type="file"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
              <label htmlFor="image-upload">
                <Button
                  color="primary"
                  component="span"
                  variant="outlined"
                  startIcon={<AddPhotoAlternateIcon />}
                  className={classes.uploadButton}
                >
                  Upload Image
                </Button>
              </label>
            </div>
            <Button variant="contained" color="primary" type="submit">
              Post
            </Button>
          </form>
        </div>
      </Modal>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
};

export default NewPostModal;