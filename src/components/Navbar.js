import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from "../assets/logo2.png"
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import StateContex from '../StateProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem"
  },
  AppBar: {
    background: "whitesmoke",
    boxShadow: "none"
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(3),
  },
  image: {
    marginRight: "5px",
    /* height: "5rem",  */
    width:"7rem",
    height:"5rem"
    
  }
}));



export default function Navbar() {
  const classes = useStyles();
  const {items} = useContext(StateContex)
  console.log(items)
  
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar>
          <Link to="/">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src = {logo} className={classes.image} alt=""/>
            </IconButton>
          </Link>        
          <div className={classes.grow}/>
          <Typography variant="h6" color='textPrimary'>
            Welcome
          </Typography>
          <div className={classes.button}>
            <Link to="/signin" >
              <Button variant='outlined'>
                  <strong>SIGN IN</strong>
              </Button>            
            </Link>
            
            <Link to="/checkout-page">
              <IconButton aria-label='show cart items' color='inherit'>
                  <Badge badgeContent={items.length} color="secondary">
                      <ShoppingCart fontSize='large' color='primary'/>
                  </Badge>
              </IconButton>
            </Link>
          </div>                
        </Toolbar>
      </AppBar>
    </div>
  );
}
