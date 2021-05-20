import { Box, Container, makeStyles } from '@material-ui/core';
import React from 'react';
import About from '../common/components/About';
import Blog from '../common/components/Blog';
import Footer from '../common/components/Footer';
import FooterCopyRight from '../common/components/FooterCopyRight';
import Header from '../common/components/Header';
import Nav from '../common/components/Nav';
import Projects from '../common/components/Projects';
import Reviews from '../common/components/Reviews';
import Services from '../common/components/Services';
import Subscribe from '../common/components/Subscribe';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2.5% 0'
  },
  project: {
    padding: '5.5% 0',
    backgroundColor: '#F8F8F8',
  },
  reviews: {
    padding: '5.5% 0',
  },
  blog: {
    padding: '5.5% 0',
    backgroundColor: '#F8F8F8',
  },
  subscribe: {
    padding: '5.5% 0',
  },
  footer: {
    padding: '5.5% 0',
    //paddingBottom: '1.5%',
    backgroundColor: '#F8F8F8',
  },
  copyright: {
    paddingTop: '2.5%',
    paddingBottom: '1.5%',
    backgroundColor: '#F8F8F8',
    borderTop: '1px solid #C4C4C4',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth>
        <Box component="section">
          <Nav />
        </Box>
        <br />
        <Box component="section" className={classes.root}>
          <Header />
        </Box>
        <Box component="section" className={classes.root}>
          <About />
        </Box>
        <Box component="section" className={classes.root}>
          <Services />
        </Box>
        <Box component="section" className={classes.project}>
          <Projects />
        </Box>
        <Box component="section" id="contact_id" className={classes.reviews}>
          <Reviews />
        </Box>
        <Box component="section" className={classes.blog}>
          <Blog />
        </Box>
        <Box component="section" className={classes.subscribe}>
          <Subscribe />
        </Box>
        <Box component="section" className={classes.footer}>
          <Footer />
        </Box>
        <Box component="section" className={classes.copyright}>
          <FooterCopyRight />
        </Box>
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
      </Container>
    </>
  );
}

export default App;
