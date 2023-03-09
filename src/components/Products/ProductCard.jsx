import * as React from 'react';
import { useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useDispatch } from "react-redux";
import { Button, CardActionArea, CardActions } from '@mui/material';
import { add } from "../../store/cartSlice"

export default function ProductCard({ product }) {
  const { data: products } = useSelector((state) => state.products);
  const dispatch = useDispatch()

  const handelClick = () => {
    dispatch(add(products.find(el => el.id === product.id)))
  }



  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={product?.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product?.title.slice(0, 28)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product?.description.slice(0, 100)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        Price: {product.price}  $

      </CardActions>
      <CardActions>
        <Button onClick={handelClick} variant="contained" size="small" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}