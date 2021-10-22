import Cart from "./models/Cart";
import Product from "./models/Product";
import User from "./models/User";

export type InsertProduct = (user: User, product: Product) => Cart; 