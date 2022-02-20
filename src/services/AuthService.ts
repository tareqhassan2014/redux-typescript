import requests from './httpService';

class AuthService {
    Login(body: { email: string; password: string }): Promise<IAuthData> {
        return requests.post('/auth/login', body);
    }

    logout(): Promise<any> {
        return requests.get('/auth/logout');
    }
}
export default new AuthService();
