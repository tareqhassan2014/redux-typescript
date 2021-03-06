import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from './components/common/Loading';
import ResponsiveAppBar from './components/common/ResponsiveAppBar';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';

const Home = React.lazy(() => import('./pages/Home'));
const Contact = React.lazy(() => import('./pages/Contact'));

const AppRouter = () => {
    return (
        <BrowserRouter>
            <ResponsiveAppBar />
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/product/:_id" element={<ProductDetail />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRouter;
