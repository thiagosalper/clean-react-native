import { injectable } from "inversify";
import { User, Product } from "../../data/models";
import { GetUser, ListProducts } from "../../data/protocols";
import { HomeProps } from "../protocols/HomeProps";

@injectable()
class HomePropsImpl implements HomeProps {
  private readonly _userProvider: GetUser;
  private readonly _productProvider: ListProducts;

  constructor(userProvider: GetUser, productProvider: ListProducts) {
    this._userProvider = userProvider;
    this._productProvider = productProvider;
  }

  getUser(): User {
    return this._userProvider.get();
  }
  listProducts(): Product[] {
    return this._productProvider.get();
  }
}

export default HomePropsImpl;
