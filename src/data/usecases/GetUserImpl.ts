import { GetUser } from '../protocols';
import { User } from '../models';

import "reflect-metadata";
import { injectable } from 'inversify';

@injectable()
class GetUserImpl implements GetUser {
  get(email: string, password: string){
    try {
      if (!email || !password) {
        throw new Error('erro generico');
      }
      return {
        name: 'Thiago',
        email: 'thiago_salper@hotmail.com',
      }
    } catch (e) {
      return e;
    }
  }
}

export default GetUserImpl;
