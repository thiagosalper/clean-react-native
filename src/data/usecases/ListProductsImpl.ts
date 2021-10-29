import { injectable } from 'inversify';
import { ProductRepository } from '../../domain/repository/ProductRepository';
import { Product } from '../models';
import { ListProducts } from '../protocols';

@injectable()
class ListProductsImpl implements ListProducts {
  private readonly _productsRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this._productsRepository = productRepository;
  }

  async get() {
    const products = await this._productsRepository.get();
  
    return products;
  }
};

export default ListProductsImpl;
