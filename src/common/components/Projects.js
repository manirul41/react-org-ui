import { Box, Grid, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  projects: {
    //paddingBottom: "2vw" 
  },
  projects_title: {
    position: "relative",
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '2vmax',
    [theme.breakpoints.down('sm')]: {
      fontSize: '6vw',
      lineHeight: '7vw',
      padding: '1px'
    },
    lineHeight: '3vmax',
    textAlign: "center",
  },

  counter_title: {
    position: "relative",
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '1.2vmax',
    //paddingBottom: '2vmax',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      //paddingBottom: '2vw'
    },
    //lineHeight: '3.5vmax',
    //color: 'white',
    //textTransform: 'uppercase',
    //textAlign: "center",
    //padding: "2vw",
  },

  counter_number: {
    position: "relative",
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '6vmax',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10vmax',
      //lineHeight: '8vw',
      //paddingBottom: '1vw',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '13vmax',
      //lineHeight: '8vw',
      //paddingBottom: '1vw',
    },
    //lineHeight: '1vmax',
  },
}));

const Projects = () => {

  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center" wrap="nowrap" className={classes.projects}>
        <Grid item>
          <Box component="h1" className={classes.projects_title}>
            3000+ Completed Work Which WE have Successfully Done
          </Box>
        </Grid>
        <Grid item>
          <Grid container direction="row" justify="center" alignItems="center" spacing={isSmall ? 2 : 3}>
            <Grid item xs={12} sm={12} md={3}>
              <Grid container direction="column" justify="center" alignItems="center">
                <Box component="span" className={classes.counter_title}>
                  Team People
                </Box>
                <Box component="span" className={classes.counter_number}>
                  52
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Grid container direction="column" justify="flex-start" alignItems="center">
                <Box component="span" className={classes.counter_title}>
                  Clients
                </Box>
                <Box component="span" className={classes.counter_number}>
                  20
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Grid container direction="column" justify="flex-start" alignItems="center">
                <Box component="span" className={classes.counter_title}>
                  Projects
                </Box>
                <Box component="span" className={classes.counter_number}>
                  140
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Grid container direction="column" justify="flex-start" alignItems="center">
                <Box component="span" className={classes.counter_title}>
                  Reviews
                </Box>
                <Box component="span" className={classes.counter_number}>
                  95%
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </>
  )
}

export default Projects