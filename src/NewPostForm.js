import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
}

from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const PostCard = ({ post }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar alt="Avatar" src={post.avatar} />}
        title={post.content}
      />
      {post.image && (
        <CardMedia className={classes.media} image={post.image} />
      )}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Additional content or comments can be placed here.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;