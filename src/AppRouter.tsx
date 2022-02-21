import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/common/ResponsiveAppBar';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/common/Navbar';


const Home = React.lazy(() => import('./pages/Home'));
const Contact = React.lazy(() => import('./pages/Contact'));

const AppRouter = () => {
    return (
        <BrowserRouter>
            <ResponsiveAppBar />
            <Suspense fallback={<div>Loading......</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/product/:_id" element={<ProductDetail />} />
                    <Route path="/Navbar" element={<Navbar></Navbar>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRouter;
