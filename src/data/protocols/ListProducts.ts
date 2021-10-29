import { Product} from '../models';

export interface ListProducts {
  get(): Promise<Product[]>;
};
