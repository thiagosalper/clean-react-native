import { GetUser } from '../protocols';
import { User } from '../models';

const GetUserImpl: GetUser = () => {
  const user: User = {
    name: 'Thiago',
    email: 'thiago_salper@hotmail.com',
  }

  return user;
}

export default GetUserImpl;
