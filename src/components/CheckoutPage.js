import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem",
  },
}));

const CheckoutPage = () => {
  const classes = useStyles();
  const [{ basket }] = useStateValue();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align='center' gutterBottom variant='h4'>
            Shopping Cart
          </Typography>
        </Grid>
        {basket?.map((item) => (
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <CheckoutCard key={item.id} product={item}/>
          </Grid>
          ))} 
        <Grid item xs={12} sm={4} md={3}>
          <Typography align='center' gutterBottom variant='h4'>
            <Total />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckoutPage;
