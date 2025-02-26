import { CategoryProduct } from "../category-product/category-product";

export interface Product {
  id: string;
  name: string;
  image_url: string;
  price: number;
  size: string;
  description: string;
  condition: string;
  created_at: Date;
  updated_at: Date;
  category: CategoryProduct;
  user: Owner;
}

export interface Owner {
  name: string;
  image_url: string;
}
