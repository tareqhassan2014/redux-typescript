import { Button, Container, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { instance } from '../../services/httpService';

type StatusType = 'idle' | 'pending' | 'success' | 'error';

const ProductDetail = () => {
    let { _id } = useParams();
    const [data, setData] = useState<IProduct>({} as IProduct);
    const [status, setStatus] = useState<StatusType>('idle');

    console.log(data);

    const { price, name, img, category, star, features } = data;

    const defaultProduct = {
        category: '',
        createdAt: '',
        features: [],
        img: '',
        name: '',
        price: 0,
        priceFraction: '',
        seller: '',
        shipping: 0,
        star: 0,
        starCount: 0,
        stock: 0,
        updatedAt: '',
        url: '',
        wholePrice: '',
        __v: 0,
        _id: '',
    };

    useEffect(() => {
        setData(defaultProduct);
        setStatus('pending');
        instance
            .get('/product/' + _id)
            .then((res) => {
                setData(res.data.data);
                setStatus('success');
            })
            .catch((err) => {
                setData(defaultProduct);
                setStatus('error');
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_id]);

    return (
        <Container>
            {status === 'success' && (
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={{ xs: 2, md: 3 }}
                >
                    <Grid item xs={12} sm={6} md={6}>
                        <img src={img} alt={name} style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="h5" color="primary">
                            {category}
                        </Typography>

                        <ul>
                            {features.map((feature, index) => (
                                <Typography
                                    key={index}
                                    gutterBottom
                                    variant="body2"
                                    component="li"
                                >
                                    {feature.description} : {feature.value}
                                </Typography>
                            ))}
                        </ul>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Typography component="span">Rating :</Typography>
                            <Rating value={star} size="large" />
                            <Typography component="span">({star})</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                my: 3,
                            }}
                        >
                            <Button size="large" color="primary">
                                ADD TO CARD
                            </Button>
                            <Button size="large" color="primary">
                                $ {price} BUY NOW
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            )}
        </Container>
    );
};

export default ProductDetail;
