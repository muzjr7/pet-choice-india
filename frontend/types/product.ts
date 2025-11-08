export interface ProductVariant {
  id: string | number;
  name?: string;
  priceDelta?: number;
}

export interface ProductImage {
  url: string;
  alt?: string;
}

export interface Product {
  id: string | number;
  name: string;
  description?: string;
  price?: number;
  images?: ProductImage[] | any; // adapt until backend shape confirmed
  variants?: ProductVariant[];
}
