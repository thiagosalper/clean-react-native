import CartItem from "./CartItem";
import User from "./User";

export default interface Cart {
  uuid: string;
  user: User;
  products: CartItem[];
}