interface IProduct {
    category: string;
    createdAt: string;
    features: IFeature[];
    img: string;
    name: string;
    price: number;
    priceFraction: string;
    seller: string;
    shipping: number;
    star: number;
    starCount: number;
    stock: number;
    updatedAt: string;
    url: string;
    wholePrice: string;
    __v: number;
    _id?: string;
}

interface IFeature {
    description: string;
    value: string;
}

interface IStore {
    _id?: string;
    name: string;
    category: string;
    description: string;
    store: string;
    price: number;
    image: string;
    _v: number;
}
