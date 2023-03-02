import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Producto from './Producto';
import products from '../data-producto';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
}));

export default function Productos() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
              <Producto key={product.id} product={product}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
