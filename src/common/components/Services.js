import { Box, Grid, Hidden, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Fade from 'react-reveal/Fade';
import serviceImg from '../utils/img/undraw_Goals_re_lu76.svg';

const useStyles = makeStyles((theme) => ({
  _header_left_first: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '10.3vmax',
    lineHeight: '9vmax',
    color: 'transparent',
    textTransform: 'uppercase',
    backgroundImage: `url('https://fastly.picsum.photos/id/218/300/300.jpg?hmac=qlFfwf1SpnYzohxO_7LnDcCOJCeXCXre2Nh0p9QO-68')`,
    backgroundSize: '100% 100%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    //letterSpacing: '8px'
  },
  _header_left_second: {
    fontFamily: 'Poppins',
    fontStyle: 'SemiBold',
    fontWeight: '600',
    fontSize: '2.5vmax',
    lineHeight: '3vmax',
    padding: '2vmax 0px',
    color: '#212121',
  },
  _header_left_third: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '1vmax',
    lineHeight: '2vmax',
    color: '#646464',
    padding: '2vmax 0px',
    //maxWidth: "200px"

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
    width: '8vmax',
    textAlign: 'center',
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

const Services = () => {

  const classes = useStyles();

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
        <Grid item sm={4} xs={8}>
        <Fade right duration={1500} distance="45px">
          <Grid container direction="column" justify="center" alignItems="flex-start">
            <Grid item>
              <Typography className={classes._header_left_first}>
                20
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3" className={classes._header_left_second}>
                Years Of Successful<br/>
                Working<br/>
                The Market
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes._header_left_forth}>
                Read More
              </Typography>
            </Grid>
          </Grid>
          </Fade>
        </Grid>
        <Hidden only={['xs']}>
          <Grid item sm={4}>
          <Fade left duration={1500} distance="45px">
            <Box className={classes._header_right_first}>
              <img className={classes._header_right_second} src={serviceImg} alt="sercies" />
              {/* <Box className={classes._header_right_second} /> */}
            </Box>
            </Fade>
          </Grid>
        </Hidden>


      </Grid>
    </>


  )
}

export default Services
