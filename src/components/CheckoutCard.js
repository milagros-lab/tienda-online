import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import accounting from "accounting";
import { DeleteForever } from '@material-ui/icons';
import { useContext } from 'react';
import StateContex from '../StateProvider';
import product from '../data-producto';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop:"1rem"

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display:"flex",
    justifyContent: "space-between",
    textAlign: "center"
  },
  cardRating: {
    display: "flex"
  }

}));

export default function CheckoutCard({product: {id, name, productType, image, price, rating, description}}) {
  const classes = useStyles();

  const {removeItems} = useContext(StateContex)
  
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography 
            className={classes.action}
            variant="h5"
            color="textSecondary"
            >
           {accounting.formatMoney( price, "€")}
          </Typography>
        }
        title={name}
        subheader="in stock"
      />    
      <CardMedia
        className={classes.media}
        image={image}
      />
      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.cardRating}> 
            {Array(rating)
            .fill()
            .map((_, i) =>(
                <p>&#11088;</p>
            ))}  
        </div>
        <IconButton>
          <DeleteForever onClick={()=> removeItems(id)}/>
        </IconButton>        
      </CardActions>
    </Card>
  );
}
