import { Product } from '../models';
import { ListProducts } from '../protocols';

const ListProductsImpl: ListProducts = () => {
  const products: Product[] = [
    { name: 'Produto Teste 1', description: 'Description ...', price: 1000 },
    { name: 'Produto Teste 1', description: 'Description ...', price: 1000 },
    { name: 'Produto Teste 1', description: 'Description ...', price: 1000 },
  ];

  return products;
};

export default ListProductsImpl;