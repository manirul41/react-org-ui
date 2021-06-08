import { Grid, makeStyles, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';

const useStyles = makeStyles((theme) => ({

  reviews_title_heading: {
    position: "relative",
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign: "center",
    margin: '0rem',
    letterSpacing: '.3rem',
    fontSize: '1.5rem',
    '& hr': {
      margin: '1rem 5rem',
      [theme.breakpoints.down('sm')]: {
        margin: '1rem 10rem',
      },
      [theme.breakpoints.down('xs')]: {
        margin: '1rem 3rem',
      },
    }
  },
  footer: {
    position: "relative",
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    //paddingBottom: '4.5%',
    //fontWeight: '600',
    //textAlign: "center",
    //margin: '0rem',
    //letterSpacing: '.3rem',
    //fontSize: '1.5rem',
    '& .MuiTypography-body1': {
      fontFamily: 'Poppins',
      fontWeight: '600',
      fontSize: '.9rem',
      lineHeight: '1.6rem',
    },
    '& .MuiTypography-subtitle2': {
      fontFamily: 'Poppins',
      fontWeight: '300',
      fontSize: 'smaller',
      lineHeight: '1.6rem',
    },
    '& .MuiSvgIcon-root:hover': {
      color: '#37806b'
    },
  },

  reviews_title_subtext: {
    position: "relative",
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: '.8rem',
    textAlign: "center",
    //fontWeight: '300',
    marginBottom: '3rem',

    [theme.breakpoints.down('sm')]: {
      margin: '2rem 8rem',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '2rem',
    },
  },
  inputSub: {
    backgroundColor: '#EEEEEE',
    //borderRadius: '12px 0 0 0',
    width: '18rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  buttonSub: {
    fontSize: '2vw',
    textAlign: 'center',
    color: 'white',
    borderRadius: "0em",
    textTransform: 'uppercase',
    backgroundColor: '#37806B',
    //borderRadius: '0 0 12px 0',
    padding: '.4rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '3vw',
    },
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: '#37806bdb'
    }
  },

}));

const Footer = () => {

  const classes = useStyles();
  // const theme = useTheme();
  // const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid container direction="row" justify="space-around" alignItems="flex-start" className={classes.footer}>
        <Grid item xs={10} md={4} container direction="column" justify="center" alignItems="center">
          <Grid md={6} container direction="column" justify="flex-end" alignItems="flex-start">
            <Grid item md={12}>
              <Typography>Logo</Typography>
            </Grid>
            <Grid item md={12}>
              <Typography variant="subtitle2" color="textSecondary">
                But i must explain to you all this mistaken
                idea of dencouncing pleasure.
            </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10} md={2}>
          <Typography variant="body1">Quick Links</Typography>
          <Typography variant="subtitle2" color="textSecondary">About Our Service</Typography>
          <Typography variant="subtitle2" color="textSecondary">Service We Provide</Typography>
          <Typography variant="subtitle2" color="textSecondary">Career & Opportunity</Typography>
          <Typography variant="subtitle2" color="textSecondary">Privacy & Policy</Typography>
          <Typography variant="subtitle2" color="textSecondary">Contact US</Typography>
        </Grid>
        <Grid item xs={10} md={2}>
          <Typography variant="body1">Company</Typography>
          <Typography variant="subtitle2" color="textSecondary">About Company</Typography>
          <Typography variant="subtitle2" color="textSecondary">Our Testimonials</Typography>
          <Typography variant="subtitle2" color="textSecondary">Latest News</Typography>
          <Typography variant="subtitle2" color="textSecondary">Our Mission</Typography>
          <Typography variant="subtitle2" color="textSecondary">Get a free Quot</Typography>
        </Grid>
        <Grid item xs={10} md={2}>
          <Typography variant="body1">Contact us</Typography>
          <Typography variant="subtitle2" color="textSecondary">Sagrada Famillia,Herba</Typography>
          <Typography variant="subtitle2" color="textSecondary">Steet Front USA</Typography>
          <Typography variant="subtitle2" color="textSecondary">brandoxide@gmail.com</Typography>
          <Typography variant="subtitle2" color="textSecondary">002-598562541</Typography>
        </Grid>
        <Grid item xs={10} md={2}>
          <Typography variant="body1">Follow Us</Typography>
          <FacebookIcon color="initial" fontSize="medium" />
          <TwitterIcon color="initial" fontSize="medium" />
          <InstagramIcon color="initial" fontSize="medium" />
          <LinkedInIcon color="initial" fontSize="medium" />
        </Grid>
      </Grid>
    </>
  )
}

export default Footer
