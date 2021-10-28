import { Product, User } from "../../data/models";

export interface HomeProps {
  getUser(): User;
  listProducts(): Product[];
  chooseProduct(product: Product, callback: () => void): void;
}