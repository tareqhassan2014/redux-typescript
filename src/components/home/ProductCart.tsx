import { Button, CardActionArea, CardActions, Grid, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import './Home.css'
import card from '../../Image/Sipping.png'

const ProductCart = ({ product }: { product: IProduct }) => {
    const { _id, name, price, img, category, seller,shipping,star} = product;
    console.log(product)
    return (
        <Card sx={{ maxWidth: 345 }} className="card">
                 <Grid item xs={12}>
                     <CardActionArea style={{display:'grid', width:'100% !important'}}> 
                         <CardMedia component="img" image={img} alt={name} style={{width:'80%'}} />
                     </CardActionArea>
                     <Typography gutterBottom className='textLeft' variant="subtitle1" component="div" style={{fontWeight:'600'}}>
                             {name.slice(0, 28)}
                     </Typography>
                 </Grid>
                  
                 <Box>
                 <Grid item xs={12}>
                     <Typography gutterBottom variant="caption" component="div" style={{fontWeight:'600'}}>
                       {seller} : {category}
                     </Typography>
                     <Typography gutterBottom variant="h6" component="div">
                      $ {price}
                     </Typography>
                 </Grid>
                 <Grid container item xs={12}>
                      <Grid item xs={6}>
                          <Rating name="read-only" value={star} readOnly />
                          <Typography gutterBottom variant="body2" component="div">
                          Shipping {shipping}  
                         </Typography>
                      </Grid>
                      <Grid item xs={6} className='flex' style={{justifyContent: 'space-evenly'}}> 
                         <Button size="small"  className='cardButton' color="primary">
                         <CardMedia component="img" className='cardImage'  image={card} alt={name} />
                         </Button> 
                         <Button size="small" className='button' color="primary">
                          BUY NOW
                         </Button>
                      </Grid>
                 </Grid>
                 </Box>
              
 
        </Card>
    );
};

export default ProductCart;


{/* <Typography
color="primary"
component={Link}
to={`/product/${_id}`}
>
Learn More
</Typography> */}

{/* 
            <CardActionArea>
                <CardMedia component="img" image={img} alt={name} />
                <CardContent>
                    <Typography gutterBottom variant="subtitle1" component="div"  style={{fontWeight:'600'}}>
                        {name.slice(0, 28)}
                    </Typography>
                    <Typography gutterBottom variant="caption" component="div" style={{fontWeight:'600'}}>
                        Category: {category}
                    </Typography>
                    <Typography className='' variant="h5" color="primary">
                        $ {price}
                   </Typography>
                </CardContent>
            </CardActionArea>
            
            <CardActions>
            <Grid container spacing={12}>
                 <Grid item xs={6}>
                     
                 </Grid>
                 <Grid className='d-flex' item xs={6}>
                      
                 </Grid>
             </Grid>
              
                
            </CardActions> */}