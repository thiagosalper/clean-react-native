import { Product, User } from "../../data/models";
import { Cart } from "../models";

export type InsertProduct = (user: User, product: Product) => Cart; 