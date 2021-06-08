import { Box, Grid, Hidden, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Fade from 'react-reveal/Fade';
import headerImg from '../utils/img/undraw_everyday_design_gy.svg';

const useStyles = makeStyles((theme) => ({
  _header_left_first: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '1.3vmax',
    lineHeight: '2vh',
    color: '#646464',
    textTransform: 'uppercase'
  },
  _header_left_second: {
    fontFamily: 'Poppins',
    fontStyle: 'SemiBold',
    fontWeight: '600',
    fontSize: '3vmax',
    lineHeight: '4vmax',
    paddingTop: '12px'
  },
  _header_left_third: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '1vmax',
    lineHeight: '2vmax',
    color: '#646464',
    padding: '2vmax 0px',
    maxWidth: "400px"

  },
  _header_left_forth: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '1vmax',
    lineHeight: '1vmax',
    color: 'white',
    textTransform: 'uppercase',
    padding: '1vmax',
    background: '#37806B',
    width: '5vmax',
    //borderRadius: '20px 0px',
  },
  _header_left_forth_btn: {
    background: '#37806B',
    borderRadius: '20px 0px',
  },
  _header_right_first: {
    position: 'relative',
    width: '90%',
    height: '90%',
    left: '20px',

    //border: '2px solid #B0855B',
    boxSizing: 'border-box',
    //borderRadius: '75px 0px',
  },
  _header_right_second: {
    position: 'inherit',
    width: '101%',
    height: '101%',
    left: '-20px',
    top: '-20px',
    //border: '2px solid #B0855B',
    boxSizing: 'content-box',
    //borderRadius: '75px 0px',
  },

}));

const Header = () => {

  const classes = useStyles();

  return (
    <>
      <Grid container direction="row" justify="center" spacing={5}>
        <Grid item sm={4} xs={8}>
      <Fade left duration={1500} distance="45px">
          <Grid container direction="column" justify="space-around">
            <Grid item>
              <Typography variant="h5" className={classes._header_left_first}>
                MODERN INTERIOR
              </Typography>

              <Typography variant="h3" className={classes._header_left_second}>
                Create Your<br />
                Interior Design.
              </Typography>

              <Typography variant="subtitle1" className={classes._header_left_third}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.
              </Typography>

              <Typography className={classes._header_left_forth}>
                CONTACT
              </Typography>
            </Grid>
          </Grid>
        </Fade>
        </Grid>
        <Hidden only={['xs']}>
          <Grid item sm={4}>
          <Fade right duration={1500} distance="45px">
            <Box className={classes._header_right_first}>
              <img className={classes._header_right_second} src={headerImg} alt="header" />
              {/* <Box className={classes._header_right_second} /> */}
            </Box>
          </Fade>
          </Grid>
        </Hidden>


      </Grid>
    </>


  )
}

export default Header
