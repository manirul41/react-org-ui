import { Drawer, Grid, Hidden, makeStyles, Toolbar } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import clsx from 'clsx';
import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  nav_root: {
    position: 'relative',
    paddingTop: '30px',
  },
  nav_cat: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '1vmax',
    lineHeight: '10px',
    color: '#646464',
    textTransform: 'uppercase',
    '& a': {
      textDecoration: 'none',
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '1vmax',
      lineHeight: '10px',
      color: '#646464',
      textTransform: 'uppercase',
      padding: '0.5vmax',
    },
    '& a:hover': {
      textDecoration: 'none',
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '1vmax',
      lineHeight: '10px',
      color: 'white',
      background: '#000000d4',
      padding: '0.5vmax',
      textTransform: 'uppercase',
    }
  },
  nav_cat_signup: {
    fontFamily: 'Open Sans',
    color: 'white',
    background: '!#37806B',
    //borderRadius: '15px 0px',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },

}));

const Header = () => {
  const [state, setState] = useState(false);
  const classes = useStyles();


  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'left' || anchor === 'bottom',
      })}
      role="presentation"
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Toolbar>
      <Router>

        <Hidden only={['xs']}>
          <Grid container direction="row" justify="space-around" className={classes.nav_root}>
            <Grid item>Logo</Grid>
            <Grid item>
              <Grid container direction="row" justify="space-between" spacing={3} className={classes.nav_cat}>
                <Grid item><NavLink to="#">Home</NavLink></Grid>
                {/* <Grid item><span onClick={() => document.getElementById("contact_id").scrollIntoView({ block: 'center',  behavior: 'smooth' })}>Project2</span></Grid> */}
                <Grid item><NavLink to="#">Project</NavLink></Grid>
                <Grid item><NavLink to="#">Services</NavLink></Grid>
                <Grid item><NavLink to="#">Blog</NavLink></Grid>
                <Grid item><NavLink to="#">Contact</NavLink></Grid>
                <Grid item><NavLink to="#">Sign Up</NavLink></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>

        <Hidden only={['sm', 'xl', 'md', 'lg']}>
          <Grid container direction="row" justify="flex-start" alignItems="baseline" className={classes.nav_root}>
            <Grid item xs={10}>Logo</Grid>
            <Grid item xs={2}>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon onClick={() => (setState(!state))} />
              </IconButton>
            </Grid>
          </Grid>
          <Drawer anchor="left" open={state} onClose={() => setState(!state)} >
            {list("left")}
          </Drawer>
        </Hidden>
      </Router>
    </Toolbar >

  )
}

export default Header
