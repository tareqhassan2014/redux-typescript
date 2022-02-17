const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL;

const imageUrlParser = (id: string, option: string = '') => {
    return `${baseUrl}${option && option + '/'}${id}`;
};

export default imageUrlParser;
