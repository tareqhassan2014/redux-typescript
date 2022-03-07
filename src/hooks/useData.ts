import { useSelector } from 'react-redux';
import { AppState } from './../redux/store/store';

const useData = (collection: 'cart') => {
    return useSelector((state: AppState) => state[collection]);
};

export default useData;
