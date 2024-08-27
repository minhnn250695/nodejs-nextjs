export interface Product {
    _id: string;
    product_id: string;
    name: string;
    description: string;
    price: number;
    currency: string;
    imageUrl: string;
    images: string[];
  }