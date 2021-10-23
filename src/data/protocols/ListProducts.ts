import { Product} from '../models';

export interface ListProducts {
  get(): Product[];
};
