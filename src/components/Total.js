import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import accounting from "accounting";
import { Button } from '@material-ui/core';
import StateContex from '../StateProvider';

const useStyles = makeStyles((theme) => ({
    root: {
     display: "flex",
     flexDirection: "column",
     justifyContent:"center",
     alignItems:"center",
     height: "20vh"
    },
    button:{
      marginTop: "1rem"
    },
  }));
  
export const Total = () => {
    const classes = useStyles();
  const {items, sumarPrecio} = useContext(StateContex);

  return (
    <div className={classes.root}>
        <h5>Total productos: {items?.length}</h5>
        <h5>{accounting.formatMoney(sumarPrecio(items?.price), "€")}</h5>
        <Button className={classes.button} variant="contained" color='secondary' >
            check out
        </Button>
    </div>
  )
}
