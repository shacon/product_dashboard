export interface Product {
  id: number;
  name: string;
  price: string;
  total_reviews: number;
  rating: string | null;
  image_url: string | null;
}

export interface ProductApiResponse {
  products: Product[];
}
