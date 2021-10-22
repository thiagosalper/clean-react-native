import Product from "./Product";

export default interface CartItem {
  qtde: number;
  product: Product[];
}