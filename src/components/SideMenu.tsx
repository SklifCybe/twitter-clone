import React from 'react';
import { Button, IconButton, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAlt';
import UserIcon from '@material-ui/icons/PermIdentity';
import { useHomeStyles } from '../pages/Home';

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({ classes }: SideMenuProps): React.ReactElement => {
  return (
    <ul className={classes.sideMenu}>
      <li className={classes.sideMenuItem}>
        <div>
          <IconButton className={classes.logo}>
            <TwitterIcon className={classes.logoIcon} color="primary"/>
          </IconButton>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <SearchIcon className={classes.sideMenuIcon}/>
          <Typography className={classes.sideMenuLabel} variant="h6">Поиск</Typography>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <NotificationIcon className={classes.sideMenuIcon}/>
          <Typography className={classes.sideMenuLabel} variant="h6">Уведомление</Typography>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <MessageIcon className={classes.sideMenuIcon}/>
          <Typography className={classes.sideMenuLabel} variant="h6">Сообщение</Typography>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <BookmarkIcon className={classes.sideMenuIcon}/>
          <Typography className={classes.sideMenuLabel} variant="h6">Закладки</Typography>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <ListIcon className={classes.sideMenuIcon}/>
          <Typography className={classes.sideMenuLabel} variant="h6">Список</Typography>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <div>
          <UserIcon className={classes.sideMenuIcon}/>
          <Typography className={classes.sideMenuLabel} variant="h6">Профиль</Typography>
        </div>
      </li>
      <li className={classes.sideMenuItem}>
        <Button
          className={classes.sideMenuTweetBtn}
          variant="contained"
          color="primary"
          fullWidth
        >
          Твитнуть
        </Button>
      </li>
    </ul>
  );
};