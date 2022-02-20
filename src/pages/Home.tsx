import SwipeableTextMobileStepper from '../components/home/Banner';
import FeatureProducts from '../components/home/FeatureProducts';
import Login from '../components/Login/Login';
import Registration from '../components/Registration/Registration';

const Home = () => {
    return (
        <div>
            <SwipeableTextMobileStepper />
            <Login></Login>
            <Registration></Registration>
            <FeatureProducts />
        </div>
    );
};

export default Home;
