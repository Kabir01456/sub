export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  specifications: {
    display: string;
    processor: string;
    storage: string;
    camera: string;
    battery: string;
    os: string;
  };
  rating: number;
  reviews: number;
  inStock: boolean;
  featured: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}