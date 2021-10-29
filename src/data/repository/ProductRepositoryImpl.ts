import { injectable } from "inversify";
import { ProductRepository } from "../../domain/repository/ProductRepository";
import { Product } from "../models";

const PRODUCTS = [
  { name: 'Produto Teste 1', description: 'Description ...', price: 1000 },
  { name: 'Produto Teste 1', description: 'Description ...', price: 1000 },
  { name: 'Produto Teste 1', description: 'Description ...', price: 1000 },
];

@injectable()
class ProductRepositoryImpl implements ProductRepository {
  get() {
    return new Promise<Product[]>((resolve, reject) => {
      resolve(PRODUCTS);
    });  
  } 
}

export default ProductRepositoryImpl;
