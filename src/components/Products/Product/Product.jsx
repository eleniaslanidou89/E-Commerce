import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
// import { classes } from 'istanbul-lib-coverage'
// import { product } from 'prelude-ls'
import useStyles from './styles'

const Product = ({ product, onAddToCart}) => {
  const classes = useStyles()

  console.log(product)

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="h5" component="h2">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{__html:product.description}} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton arial-label="Add to cart" onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product
