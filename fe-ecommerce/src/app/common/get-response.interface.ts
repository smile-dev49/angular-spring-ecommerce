import { Category } from "./category";
import { Product } from "./product";

export interface GetResponseProducts {
    _embedded: {
      products: Product[];
    }
  }

export interface GetResponseCategories {
    _embedded: {
      categories: Category[];
    }
  }