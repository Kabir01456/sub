import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    price: 134900,
    originalPrice: 139900,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'The most advanced iPhone ever with titanium design and powerful A17 Pro chip.',
    specifications: {
      display: '6.1" Super Retina XDR',
      processor: 'A17 Pro chip',
      storage: '128GB',
      camera: '48MP Main + 12MP Ultra Wide',
      battery: '3274 mAh',
      os: 'iOS 17'
    },
    rating: 4.8,
    reviews: 1250,
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 129999,
    originalPrice: 134999,
    image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Ultimate flagship with S Pen and incredible camera capabilities.',
    specifications: {
      display: '6.8" Dynamic AMOLED 2X',
      processor: 'Snapdragon 8 Gen 3',
      storage: '256GB',
      camera: '200MP + 50MP + 12MP + 10MP',
      battery: '5000 mAh',
      os: 'Android 14'
    },
    rating: 4.7,
    reviews: 890,
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Google Pixel 8 Pro',
    brand: 'Google',
    price: 84999,
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Best Android experience with incredible AI-powered photography.',
    specifications: {
      display: '6.7" LTPO OLED',
      processor: 'Google Tensor G3',
      storage: '128GB',
      camera: '50MP + 48MP + 48MP',
      battery: '5050 mAh',
      os: 'Android 14'
    },
    rating: 4.6,
    reviews: 567,
    inStock: true,
    featured: false
  },
  {
    id: '4',
    name: 'OnePlus 12',
    brand: 'OnePlus',
    price: 64999,
    originalPrice: 69999,
    image: 'https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Flagship killer with ultra-fast charging and premium build.',
    specifications: {
      display: '6.82" LTPO AMOLED',
      processor: 'Snapdragon 8 Gen 3',
      storage: '256GB',
      camera: '50MP + 64MP + 48MP',
      battery: '5400 mAh',
      os: 'OxygenOS 14'
    },
    rating: 4.5,
    reviews: 743,
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    price: 89999,
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Photography powerhouse with Leica camera system.',
    specifications: {
      display: '6.73" LTPO AMOLED',
      processor: 'Snapdragon 8 Gen 3',
      storage: '512GB',
      camera: '50MP + 50MP + 50MP + 50MP',
      battery: '5300 mAh',
      os: 'MIUI 15'
    },
    rating: 4.4,
    reviews: 456,
    inStock: true,
    featured: false
  },
  {
    id: '6',
    name: 'Nothing Phone 2',
    brand: 'Nothing',
    price: 44999,
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Unique design with Glyph interface and pure Android experience.',
    specifications: {
      display: '6.7" LTPO OLED',
      processor: 'Snapdragon 8+ Gen 1',
      storage: '128GB',
      camera: '50MP + 50MP',
      battery: '4700 mAh',
      os: 'Nothing OS 2.0'
    },
    rating: 4.3,
    reviews: 234,
    inStock: true,
    featured: false
  },
  {
    id: '7',
    name: 'Realme GT 5 Pro',
    brand: 'Realme',
    price: 39999,
    originalPrice: 44999,
    image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Gaming-focused smartphone with excellent performance.',
    specifications: {
      display: '6.78" AMOLED',
      processor: 'Snapdragon 8 Gen 2',
      storage: '256GB',
      camera: '50MP + 8MP + 2MP',
      battery: '5400 mAh',
      os: 'Realme UI 5.0'
    },
    rating: 4.2,
    reviews: 189,
    inStock: true,
    featured: false
  },
  {
    id: '8',
    name: 'Vivo X100 Pro',
    brand: 'Vivo',
    price: 79999,
    image: 'https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Camera-centric flagship with Zeiss optics.',
    specifications: {
      display: '6.78" AMOLED',
      processor: 'MediaTek Dimensity 9300',
      storage: '256GB',
      camera: '50MP + 50MP + 50MP',
      battery: '5400 mAh',
      os: 'Funtouch OS 14'
    },
    rating: 4.1,
    reviews: 321,
    inStock: false,
    featured: false
  }
];