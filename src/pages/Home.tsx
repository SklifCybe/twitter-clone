import React from 'react';
import {
  Container,
  Grid,
  InputBase,
  makeStyles,
  Paper,
  Theme,
  Typography
} from '@material-ui/core';
import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu';

export const useHomeStyles = makeStyles((theme:Theme) => ({
  wrapper: {
    height: '100vh',
    margin: 0,
    padding: 0,
  },
  sideMenu: {
    listStyle: 'none',
    width: 230
  },
  logo: {
    margin: '10px 0'
  },
  logoIcon: {
    fontSize: 26
  },
  sideMenuItem: {
    cursor: 'pointer',
    '&:hover': {
      '& div': {
        backgroundColor: 'rgba(29, 241, 242, .1)',
        color: theme.palette.primary.main
      },
      '& svg': {
        fill: theme.palette.primary.main
      }
    },
    '& div': {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 25px 0 20px',
      position: 'relative',
      height: 50,
      marginBottom: 15,
      transition: 'background-color .15s ease-in-out',
      borderRadius: 30,
    }
  },
  sideMenuLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15
  },
  sideMenuIcon: {
    fontSize: 25,
  },
  sideMenuTweetBtn: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(2)
  },
  text: {
    fontSize: 20
  },
  input: {
    backgroundColor: '#e7ecf3',
    borderRadius: 30
  },
  tweetsWrapper: {
    borderRadius: 0,
    borderTop: 0,
    borderBottom: 0,
    height: '100%'
  },
  tweetsHeader: {
    borderRadius: 0,
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    padding: '10px 15px',
    '& h6': {
      fontWeight: 800
    }
  },
  tweetUserName: {
    color: '#9fa3a9'
  },
  tweetFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 450,
    position: 'relative',
    left: -13
  },
  tweet: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f6f7fa'
    }
  }
}));


export const Home: React.FC = (): React.ReactElement => {
  const classes = useHomeStyles();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes}/>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant={'outlined'}>
            <Paper className={classes.tweetsHeader} variant={'outlined'}>
              <Typography variant={'h6'}>Главная</Typography>
            </Paper>
            {
              new Array(10).fill(<Tweet
                text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ea error, maxime nemo repellendus soluta velit. Assumenda cumque dignissimos error explicabo fuga incidunt minima molestiae officiis quae, quasi, soluta tenetur velit voluptatem? Adipisci architecto assumenda autem dolores eaque expedita impedit, incidunt itaque maiores quidem quos, repellendus sequi sint totam, voluptates.'}
                classes={classes}
                user={{fullname: 'ilya', username: 'sklif', avatarUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}}
              />)
            }
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <InputBase
            className={classes.input}
            placeholder="Поиск"
            fullWidth
          />
        </Grid>
      </Grid>
    </Container>
  );
};