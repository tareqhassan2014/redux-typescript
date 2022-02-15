import Contacts from '../components/Contacts';
import { Counter } from '../features/counter/Counter';

const Home = () => {
    return (
        <div>
            <Contacts />
            <Counter />
        </div>
    );
};

export default Home;
