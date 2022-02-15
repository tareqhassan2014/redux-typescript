import requests from './httpService';

class StoreService {
    getStores(): Promise<IStore[]> {
        return requests.get('/store');
    }

    getStoreBuyID(id: string): Promise<IStore> {
        return requests.get(`/Store/${id}`);
    }

    addStore(body: IStore): Promise<IStore> {
        return requests.post('/store', body);
    }

    updateStore(id: string, body: IStore): Promise<IStore> {
        return requests.patch(`/store/${id}`, body);
    }

    deleteStore(id: string): Promise<IStore> {
        return requests.delete(`/store/${id}`);
    }
}

export default new StoreService();
