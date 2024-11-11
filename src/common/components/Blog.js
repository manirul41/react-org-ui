import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({

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
    border: '1px solid black',
    position: 'absolute',
    minWidth: '280px',
    minHeight: '200px',
    borderRadius: '30px 0px',
    [theme.breakpoints.down('sm')]: {
      minWidth: '200px',
      minHeight: '150px',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '150px',
      minHeight: '100px',
    },

  },
  img: {
    margin: 'auto 0',
    display: 'block',
    maxWidth: '280px',
    height: '200px',
    position: 'relative',
    top: '-6px',
    left: '-6px',
    borderRadius: '30px 0px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '200px',
      height: '150px',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '150px',
      height: '100px',
    },
  },
  _header_left_forth: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '.8vmax',
    lineHeight: '1vmax',
    color: 'white',
    textTransform: 'uppercase',
    padding: '1vmax',
    background: '#37806B',
    width: '10vmax',
    textAlign: 'center',
    marginTop: '5px',
  },
}));

const Blog = () => {

  const classes = useStyles();
  // const theme = useTheme();
  // const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center" wrap="nowrap">
        <Grid item>
          <Box component="p" className={classes.reviews_title_heading}>
            LETEST NEWS
          </Box>
          <Box component="h1" className={classes.reviews_title_subtext}>
            From Our Blog
          </Box>
        </Grid>
        <Grid item >
          <Grid container direction="row" justify="center" spacing={5}>
            <Grid item xs={10} sm={10} md={4} >
              <Grid container direction="column" alignItems="flex-start">
                <Grid item>
                  <Box alignSelf="center" pt={1}>
                    <Box component="span" className={classes.image} />
                    <img width={280} className={classes.img} alt="complex" src={`https://fastly.picsum.photos/id/946/300/300.jpg?hmac=Tfynt1R-QgkiDDO4MonY6IDwemU9rQ3IITkWfPJtO50`} />
                  </Box>
                </Grid>
                <Grid item>
                  <Box component="h3" pt={1}>2020 Interior Design Trends</Box>
                  <Box component="p" pt={.01} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    incididunt ut labore et dolore magna aliqua.
                  </Box>
                  <Typography className={classes._header_left_forth}>
                    CONTINUE READING....
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={10} sm={10} md={4} >
              <Grid container direction="column" alignItems="flex-start">
                <Grid item>
                  <Box alignSelf="center" pt={1}>
                    <Box component="span" className={classes.image} />
                    <img width={280} className={classes.img} alt="complex" src={`https://i.picsum.photos/id/538/200/200.jpg?hmac=oJRLJPsN8ZdWjPpKGEU-oqAZMBKa4JsTnuUSqgRbyP4`} />
                  </Box>
                </Grid>
                <Grid item>
                  <Box component="h3" pt={1}>2020 Interior Design Trends</Box>
                  <Box component="p" pt={.01} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    incididunt ut labore et dolore magna aliqua.
                  </Box>
                  <Typography className={classes._header_left_forth}>
                    CONTINUE READING....
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Blog
