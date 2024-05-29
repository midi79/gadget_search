export interface IProduct {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
}

export interface ICartProduct extends IProduct {
    quantity: number;
}

// Props

export interface IProps {
    data: IProduct;
}

export interface ICategoryProp {
    category: string;
    page: number;
}

export interface IProductProps extends IProps {
    handlePopup: (eventValue: boolean) => void;
    setProduct: (eventValue: IProduct) => void;
}

export interface IPopupProps extends IProps {
    handlePopup: (eventValue: boolean) => void;
}

export interface IUrlProps {
    url: string;
    onImagePopupClick: (eventValue: boolean) => void;
}

export interface IProductCartProps {
    handlePopup: (eventValue: boolean) => void;
}

export interface ICartPopupProductProps {
    item: ICartProduct;
}
