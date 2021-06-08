import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Slider from './Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
  },
  reviews_title_heading: {
    position: "relative",
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '300',
    textAlign: "center",
    margin: '0rem'
  },
  reviews_title_subtext: {
    position: "relative",
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    textAlign: "center",
    fontWeight: '600',
    marginTop: '0rem',
    marginBottom: '2rem'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 600,
    maxHeight: 300,
  },
  image: {
    width: 75,
    height: 75,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    marginRight: '85px',
    borderRadius: '50%',
  },
}));

const Reviews = () => {

  const classes = useStyles();
  // const theme = useTheme();
  // const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center" wrap="nowrap">
        <Grid item>
          <Box component="p" className={classes.reviews_title_heading}>
            TESTIMONIALS
          </Box>
          <Box component="h1" className={classes.reviews_title_subtext}>
            Client says about us
          </Box>
        </Grid>
        <Grid item container direction="row" justify="space-around" spacing={5}>
          
          <Grid item xs={12} sm={12} md={8}>
            <div className={classes.root}>
            <Slider/>
              {/* <Paper className={classes.paper}>
                <Grid container direction="row" justify="flex-start" alignItems="center" spacing={0.5} wrap="nowrap">
                  <Grid item >
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src={`https://i.picsum.photos/id/538/200/200.jpg?hmac=oJRLJPsN8ZdWjPpKGEU-oqAZMBKa4JsTnuUSqgRbyP4`} />
                    </ButtonBase>
                  </Grid>
                  <Grid item container direction="row" justify="space-between" alignItems="flex-start">
                      <Grid item xs="10" md="11">
                        <Typography gutterBottom variant="subtitle1">
                          Louis Saville /
                            <Typography variant="sub" color="textSecondary">
                              CEO at Google inc
                            </Typography>
                        </Typography>
                      </Grid>
                      <Grid item xs="2" md="1">
                        <Typography variant="sup">
                          <FormatQuoteIcon color="initial" fontSize="large" />
                        </Typography>
                      </Grid>
                      <Grid item md="12">
                        <Typography variant="p" color="textSecondary">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                          et dolore magna aliqua.
                      </Typography>
                      </Grid>
                  </Grid>
                </Grid>
              </Paper> */}
            </div>
          </Grid>
          
          {/* <Grid item xs={12} sm={12} md={5}>

            </Grid>
            <Slider/> */}
        </Grid>
      </Grid>
    </>
  )
}

export default Reviews
