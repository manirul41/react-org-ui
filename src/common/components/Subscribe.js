import { Box, Button, Grid, InputBase, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
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
    fontSize: '1vw',
    textAlign: 'center',
    color: 'white',
    borderRadius: "0em",
    textTransform: 'uppercase',
    backgroundColor: '#37806B',
    //borderRadius: '0 0 12px 0',
    padding: '.4rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2vw',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '3vw',
    },
    "&:hover": {
    //you want this to be the same as the backgroundColor above
    backgroundColor: '#37806bdb'
  }
  },
  
}));

const Subscribe = () => {

  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center" wrap="nowrap">
        <Grid item xs={10} md={5}>
          <Box component="p" className={classes.reviews_title_heading}>
            DON’T FORGET TO SIGN UP
          <hr />
          </Box>
          <Box component="p" className={classes.reviews_title_subtext}>
            Find out early about all upcoming promotions and new product releases with
            our newsletter.
          </Box>
        </Grid>
        <Grid item xs={10} md={12} container direction="row" justify="center" alignContent="stretch"  wrap="nowrap">
          <InputBase
            name="input"
            className={classes.inputSub}
            placeholder="Enter your email address....."
            inputProps={{ 'aria-label': 'Enter your email address.....' }}
          />
          <Button className={classes.buttonSub}>Subscribe</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Subscribe
