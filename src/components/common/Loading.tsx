import Lottie from 'react-lottie';
import animationData from '../../assets/animation-json/lottie-loader.json';

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <div>
            <p>Contact components</p>
            <Lottie options={defaultOptions} height={400} width={400} />
        </div>
    );
};

export default Loading;
