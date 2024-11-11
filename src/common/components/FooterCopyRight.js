import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  footerCopyRight: {
    '& span' : {
      color: '#37806b'
    }
  }
}));

const FooterCopyRight = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center" className={classes.footerCopyRight}>
        <Grid item container direction="row" xs={10} md={12} justify="center" alignItems="center">
          <Typography>Copyright @ 2021 <span>ABC Co. ltd</span>.all right reserved.</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default FooterCopyRight
