import { Product } from '../../data/models';

export default interface CartItem {
  qtde: number;
  product: Product[];
}