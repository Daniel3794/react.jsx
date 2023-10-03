// Post.js

import React from 'react';

const Post = ({ content, image }) => {
  return (
    <div>
      <p>{content}</p>
      {image && <img src={image} alt="Post" style={{ maxWidth: '60%' }} />}
    </div>
  );
};

export default Post;