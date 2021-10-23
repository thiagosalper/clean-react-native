import { GetUser } from '../protocols';
import { User } from '../models';

import "reflect-metadata";
import { injectable } from 'inversify';

@injectable()
class GetUserImpl implements GetUser {
  get(){
    return {
      name: 'Thiago',
      email: 'thiago_salper@hotmail.com',
    }
  }
}

// const GetUserImpl: GetUser = () => {
//   const user: User = {
//     name: 'Thiago',
//     email: 'thiago_salper@hotmail.com',
//   }

//   return user;
// }

export default GetUserImpl;
