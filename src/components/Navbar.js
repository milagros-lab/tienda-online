import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import logo from "../assets/cuttevents.png";
import { Badge, Button } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useStateValue } from "../StateProvider";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
    backgroundColor: "whitesmoke",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {    
    marginRight: "5px",
    width:"7rem",
    height:"5rem"
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      history.push("/");
    }
    console.log(user);
  };

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Link to='/'>
            <IconButton>
              <img
                src={logo}
                alt='Commerce.js'
                height='30px'
                className={classes.image}
              />
            </IconButton>
          </Link>

          <div className={classes.grow} />
          <Typography variant='h6' color='textPrimary' component='p'>
            Hello {user ? user.email : "Guest"}
          </Typography>
          <div className={classes.button}>
            <Link to={!user && "/signin"}>
              <Button onClick={handleAuth} variant='outlined'>
                <strong>{user ? "Cerrar sesion" : "Iniciar sesion"}</strong>
              </Button>
            </Link>

            <Link to='/checkout-page'>
              <IconButton aria-label='show cart items' color='inherit'>
                <Badge badgeContent={basket?.length} color='secondary'>
                  <ShoppingCart fontSize='large' color='primary' />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
