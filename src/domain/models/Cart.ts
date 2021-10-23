import CartItem from './CartItem';
import { User } from '../../data/models';

export default interface Cart {
  uuid: string;
  user: User;
  products: CartItem[];
}