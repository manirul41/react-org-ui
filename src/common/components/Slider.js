import { ButtonBase, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import React from 'react';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, {
  Autoplay, Navigation, Pagination
} from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/swiper.scss';


SwiperCore.use([Autoplay,Pagination,Navigation]);

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
    position: "relative",
    padding: theme.spacing(2),
    margin: '2rem',
    maxWidth: 600,
    maxHeight: 330,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
    },
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

const Slider = () => {
  const classes = useStyles();

  const sliderarray = [1,2,3,4,5,6]

  return (
    <Swiper
      speed= {3000}
      slidesPerView={2}
      spaceBetween={30}
      //slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      autoplay={{
        "delay": 3000,
        "disableOnInteraction": false,
        "pauseOnMouseEnter": true,
      }}
      pagination={{
        "clickable": true
      }}
      navigation={false}
      className="mySwiper"
      breakpoints={{
        "@0.00": {
          "slidesPerView": 1,
          "spaceBetween": 30
        },
        "@0.75": {
          "slidesPerView": 1,
          "spaceBetween": 30
        },
        "@1.70": {
          "slidesPerView": 1,
          "spaceBetween": 30
        },
        "@1.80": {
          "slidesPerView": 2,
          "spaceBetween": 30
        }
      }}
    >
      {sliderarray.map( () => {
       return (
            <SwiperSlide>
              <Paper className={classes.paper}>
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
              </Paper>
            </SwiperSlide>
       )
      })}
      {/* <SwiperSlide>
        <Grid item xs={12} sm={12} md={5}>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container direction="row" justify="flex-start" alignItems="center" spacing={0.5} wrap="nowrap">
                <Grid item >
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={`https://i.picsum.photos/id/538/200/200.jpg?hmac=oJRLJPsN8ZdWjPpKGEU-oqAZMBKa4JsTnuUSqgRbyP4`} />
                  </ButtonBase>
                </Grid>
                <Grid item>
                  <Grid container direction="row" justify="space-between" alignItems="flex-start" wrap="nowrap">
                    <Grid item>
                      <Typography gutterBottom variant="subtitle1">
                        Louis Saville /
                            <Typography variant="sub" color="textSecondary">
                          CEO at Google inc
                            </Typography>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="sup">
                        <FormatQuoteIcon color="initial" fontSize="large" />
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="p" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                      </Typography>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
      </SwiperSlide>
      <SwiperSlide>
        <Grid item xs={12} sm={12} md={5}>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container direction="row" justify="flex-start" alignItems="center" spacing={0.5} wrap="nowrap">
                <Grid item >
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={`https://i.picsum.photos/id/538/200/200.jpg?hmac=oJRLJPsN8ZdWjPpKGEU-oqAZMBKa4JsTnuUSqgRbyP4`} />
                  </ButtonBase>
                </Grid>
                <Grid item>
                  <Grid container direction="row" justify="space-between" alignItems="flex-start" wrap="nowrap">
                    <Grid item>
                      <Typography gutterBottom variant="subtitle1">
                        Louis Saville /
                            <Typography variant="sub" color="textSecondary">
                          CEO at Google inc
                            </Typography>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="sup">
                        <FormatQuoteIcon color="initial" fontSize="large" />
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="p" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                      </Typography>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
      </SwiperSlide>
      <SwiperSlide>
        <Grid item xs={12} sm={12} md={5}>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container direction="row" justify="flex-start" alignItems="center" spacing={0.5} wrap="nowrap">
                <Grid item >
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={`https://i.picsum.photos/id/538/200/200.jpg?hmac=oJRLJPsN8ZdWjPpKGEU-oqAZMBKa4JsTnuUSqgRbyP4`} />
                  </ButtonBase>
                </Grid>
                <Grid item>
                  <Grid container direction="row" justify="space-between" alignItems="flex-start" wrap="nowrap">
                    <Grid item>
                      <Typography gutterBottom variant="subtitle1">
                        Louis Saville /
                            <Typography variant="sub" color="textSecondary">
                          CEO at Google inc
                            </Typography>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="sup">
                        <FormatQuoteIcon color="initial" fontSize="large" />
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="p" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                      </Typography>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
      </SwiperSlide>
      <SwiperSlide>
        <Grid item xs={12} sm={12} md={5}>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container direction="row" justify="flex-start" alignItems="center" spacing={0.5} wrap="nowrap">
                <Grid item >
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={`https://i.picsum.photos/id/538/200/200.jpg?hmac=oJRLJPsN8ZdWjPpKGEU-oqAZMBKa4JsTnuUSqgRbyP4`} />
                  </ButtonBase>
                </Grid>
                <Grid item>
                  <Grid container direction="row" justify="space-between" alignItems="flex-start" wrap="nowrap">
                    <Grid item>
                      <Typography gutterBottom variant="subtitle1">
                        Louis Saville /
                            <Typography variant="sub" color="textSecondary">
                          CEO at Google inc
                            </Typography>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="sup">
                        <FormatQuoteIcon color="initial" fontSize="large" />
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="p" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                      </Typography>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
      </SwiperSlide> */}

    </Swiper>
  )
}

export default Slider
