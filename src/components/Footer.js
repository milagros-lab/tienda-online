import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#aaaadb",
    color: "#000",
    padding: theme.spacing(2),
    textAlign: "center",
  },
  link: {
    color: '#000',
    textDecoration: 'none',
    margin: theme.spacing(0, 1),
  },

}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
    <p>&copy; 2024 Mi Sitio Web</p>
    <nav>
      <a href="/" className={classes.link}>
        Inicio
      </a>
      <a href="/" className={classes.link}>
        Acerca de nosotros
      </a>
      <a href="/" className={classes.link}>
        Servicios
      </a>
      <a href="/" className={classes.link}>
        Contacto
      </a>
    </nav>
  </footer>
  );
};
export default Footer;
