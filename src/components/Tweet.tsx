import React from 'react';
import { Avatar, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import { useHomeStyles } from '../pages/Home';
import classNames from 'classnames';

interface TweetProps {
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullname: string,
    username: string,
    avatarUrl: string
  };
}

export const Tweet: React.FC<TweetProps> = ({ text, classes, user }: TweetProps): React.ReactElement => {
  return (
    <Paper className={classNames(classes.tweetsHeader, classes.tweet)} variant={'outlined'}>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Avatar alt={`Avatar ${user.fullname}`}
                  src={user.avatarUrl}/>
        </Grid>
        <Grid item xs={11}>
          <Typography>
            <b>{user.fullname}</b>&nbsp;
            <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
            <span className={classes.tweetUserName}>1ч.</span>
          </Typography>
          <Typography>
            {text}
          </Typography>
          <div className={classes.tweetFooter}>
            <div>
              <IconButton>
                <CommentIcon style={{ fontSize: 20 }}/>
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <RepeatIcon style={{ fontSize: 20 }}/>
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <LikeIcon style={{ fontSize: 20 }}/>
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <ReplyIcon style={{ fontSize: 20 }}/>
              </IconButton>
              <span>1</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

