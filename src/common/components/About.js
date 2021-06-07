import { Box, Grid, Hidden, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Fade from 'react-reveal/Fade';
import aboutImg from '../utils/img/undraw_team_spirit_hrr4.svg';

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

const About = () => {

  const classes = useStyles();

  return (
    <>
      <Grid container direction="row-reverse" justify="center" alignItems="center" spacing={5}>
        <Grid item sm={4} xs={8}>
        <Fade right duration={1500} distance="45px">
          <Grid container direction="column" justify="center" alignItems="flex-start">
            <Grid item>
              <Typography variant="h5" className={classes._header_left_first}>
                About Us
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3" className={classes._header_left_second}>
                Interioris The Will
                of An Epoch Mextreo
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" className={classes._header_left_third}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form injected
                humour, or randomised words which don't look even slightly
                believable.If you are going to use a passage of Lorem Ipsum,
                sure there isn't anything embarrassing hidden the middleof text.
                All the Lorem Ipsum generators on the Internettend to repeat
                predefined chunks as necessary,making this the first true
                generator on the Internet.
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes._header_left_forth}>
                Learn More
              </Typography>
            </Grid>
          </Grid>
          </Fade>
        </Grid>
        <Hidden only={['xs']}>
          <Grid item sm={4}>
          <Fade bottom duration={1500} distance="45px">
            <Box className={classes._header_right_first}>
              <img className={classes._header_right_second} src={aboutImg} alt="image" />
              {/* <Box className={classes._header_right_second} /> */}
            </Box>
            </Fade>
          </Grid>
        </Hidden>


      </Grid>
    </>


  )
}

export default About
