import React from 'react';
import { Button, FormControl, FormGroup, makeStyles, TextField, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import UsersIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';

import { ModalBlock } from '../components/ModalBlock';

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh'
  },
  infoSide: {
    background: '#71C9F8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
    position: 'relative',
    overflow: 'hidden'
  },
  infoBlock: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    width: 380,
    position: 'relative',
    '& h6': {
      color: '#fff',
      fontWeight: 700,
      fontSize: 20,
      display: 'flex',
      alignItems: 'center'
    }
  },
  infoBlockIcon: {
    marginRight: 15,
    fontSize: 30
  },
  infoBlockItem: {
    marginBottom: 40
  },
  infoSideTwitterIcon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '150%',
    height: '150%'
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: '0 0 50%'
  },
  loginBlock: {
    width: 380
  },
  loginBlockTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 60,
    marginTop: 20
  },
  loginSideTwitterIcon: {
    fontSize: 45
  },
  field: {
    marginBottom: theme.spacing(2)
  }
}));

export const SignIn: React.FC = () => {
  const classes = useStylesSignIn();

  const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal('signIn');
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleModal('signUp');
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.infoSide}>
        <TwitterIcon color="primary" className={classes.infoSideTwitterIcon}/>
        <ul className={classes.infoBlock}>
          <li className={classes.infoBlockItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.infoBlockIcon}/>
              Читайте о том, что вам нравится.
            </Typography>
          </li>
          <li className={classes.infoBlockItem}>
            <Typography variant="h6">
              <UsersIcon className={classes.infoBlockIcon}/>
              Узнайте, о чём говорят в мире.
            </Typography>
          </li>
          <li className={classes.infoBlockItem}>
            <Typography variant="h6">
              <MessageIcon className={classes.infoBlockIcon}/>
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginBlock}>
          <TwitterIcon color="primary" className={classes.loginSideTwitterIcon}/>
          <Typography className={classes.loginBlockTitle}>
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b>Присоединяйтесь к Твиттеру прямо сейсас!</b>
          </Typography>
          <br/>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginBottom: '20px' }}
            onClick={handleClickOpenSignUp}
          >
            Зарегистрироваться
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={handleClickOpenSignIn}
          >
            Войти
          </Button>
          <ModalBlock
            visible={visibleModal === 'signIn'}
            title="Войти в аккаунт"
            onClose={handleCloseModal}
            classes={classes}
          >
            <FormControl className={classes.field} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.field}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  variant="outlined"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.field}
                  autoFocus
                  id="password"
                  label="Пароль"
                  variant="outlined"
                  type="password"
                  fullWidth
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleCloseModal}
                >
                  Войти
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
          <ModalBlock
            visible={visibleModal === 'signUp'}
            title="Создайте учётную запись"
            onClose={handleCloseModal}
            classes={classes}
          >
            <FormControl className={classes.field} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.field}
                  autoFocus
                  id="name"
                  label="Имя"
                  variant="outlined"
                  type="name"
                  fullWidth
                />
                <TextField
                  className={classes.field}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  variant="outlined"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.field}
                  autoFocus
                  id="password"
                  label="Пароль"
                  variant="outlined"
                  type="password"
                  fullWidth
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Далее
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </section>
    </div>
  );
};