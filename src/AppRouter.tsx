import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/common/ResponsiveAppBar';

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
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRouter;
