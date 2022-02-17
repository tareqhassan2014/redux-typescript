import axios, { AxiosResponse } from 'axios';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 1500,
});

const responseBody = (response: AxiosResponse) => response.data.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    delete: (url: string) => instance.delete(url).then(responseBody),
    post: (url: string, body: object) =>
        instance.post(url, body).then(responseBody),
    patch: (url: string, body: object) =>
        instance.patch(url, body).then(responseBody),
};

export default requests;
