import { makeStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import React, { useState } from 'react';
  

const useStyles = makeStyles((theme) => ({
    scrollbtn: {
        position: 'sticky', 
        bottom: '40px',
        fontSize: '3rem',
        zIndex: '1',
        cursor: 'pointer',
        float: 'right',
        '& > button': {
            backgroundColor: '#37806B',
            '& svg': {
                color: 'white',
            },
        },
        '& > button:hover': {
            backgroundColor: '#37806bde',
        }
    },
  }));

const ScrollButton = () =>{
    const classes = useStyles();
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
      <div className={classes.scrollbtn} style={{display: visible ? 'inline' : 'none'}}>

        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon onClick={scrollToTop} 
      />
        </Fab>
      </div>
  );
}
  
export default ScrollButton;