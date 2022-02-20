import { Container, Grid, Typography } from '@mui/material';
import useAsync from '../../hooks/useAsync';
import ProductService from '../../services/ProductService';
import ProductCart from '../common/ProductCart';

const FeatureProducts = () => {
    const { data: products } = useAsync(ProductService.getAllProducts);

    console.log(products);

    return (
        <>
            <Typography variant="h2" sx={{ my: 5 }} color="primary">
                Feature Product
            </Typography>
            <Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={{ xs: 2, md: 3 }}
                >
                    {products &&
                        products.map((product) => (
                            <Grid item xs={12} sm={6} md={4} key={product._id}>
                                <ProductCart product={product} />
                            </Grid>
                        ))}
                </Grid>
            </Container>
        </>
    );
};

export default FeatureProducts;
