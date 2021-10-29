import { Product } from "../../data/models";

export interface ProductRepository {
  get(): Promise<Product[]>;
}
